const todo = () => {
  const addButton = document.querySelector('.todo__add'),
  input = document.querySelector('.todo__text'),
  list = document.querySelector('.todo__items'),
  clearAllButton = document.querySelector('.clear__button'),
  itemsLeft = document.querySelector('.number-items'),
  buttonsBlock = document.querySelector('.buttons__block');

  let todoItems = [];

  // функция показать новое дело
  const renderTodo = (todo) => {
    localStorage.setItem('todoItemsRef', JSON.stringify(todoItems));

    const item = document.querySelector(`[data-key='${todo.id}']`);

    if (todo.deleted) {
      item.remove();
      if (todoItems.length === 0) list.innerHTML = '';
      return
    }

    const isChecked = todo.checked ? 'done': '';

    const node = document.createElement("li");
    node.setAttribute('class', `todo__item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.setAttribute('draggable', true);
    node.innerHTML = `
      <input type="checkbox" id="${todo.id}" class="complete__todo todo__checkbox">
      <label for="${todo.id}"></label>
      <span class="todo__task">${todo.text}</span>
      <button class="delete__todo"></button>
    `;

    if (item) {
      list.replaceChild(node, item);
    } else {
      list.append(node);
    }

    howItemsLeft();
  }

  // добавить новое дело
  const addTodo = (text) => {
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };

    todoItems.push(todo);
    renderTodo(todo);
  }

  // отметить дело как выполненное
  const toggleDone = (key) => {
    const index = todoItems.findIndex(item => item.id === Number(key));

    todoItems[index].checked = !todoItems[index].checked;
    renderTodo(todoItems[index]);
  }

  // удалить дело
  const deleteTodo = (key) => {
    const index = todoItems.findIndex(item => item.id === Number(key));

    const todo = {
      deleted: true,
      ...todoItems[index]
    };

    todoItems = todoItems.filter(item => item.id !== Number(key));
    renderTodo(todo);
    howItemsLeft();
  }

  // количесиво оставшихся дел
  const howItemsLeft = () => {
    let n = 0;
    for (let i = 0; i < todoItems.length; i++) {
      const todo = todoItems[i];
      if (!todo.checked) {
        n++;
      }
    }
    itemsLeft.textContent = n;
  }

  // сортировка списка дел
  const sortTodo = (todo) => {
    const listItems = document.querySelectorAll('.todo__item');

    switch (todo) {
      case 'all':
        for (let i = 0; i < listItems.length; i++) {
          const item = listItems[i];
          item.classList.remove('hidden');
        }
        break;
      case 'active':
        for (let i = 0; i < listItems.length; i++) {
          const item = listItems[i];
          if (item.classList.contains('done')) {
            item.classList.add('hidden');
          } else {
            item.classList.remove('hidden');
          }
        }
        break;
      case 'completed':
        for (let i = 0; i < listItems.length; i++) {
          const item = listItems[i];
          if (!item.classList.contains('done')) {
            item.classList.add('hidden');
          } else {
            item.classList.remove('hidden');
          }
        }
        break;
      default:
        break;
    }
  }

  // проверка на пустую строку и вызов функции добавить дело
  const checkNewTodo = () => {
    const text = input.value.trim();
      if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
      }
  }

  // слушатели событий
  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    checkNewTodo();
  })

  input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      checkNewTodo();
    }
  })

  clearAllButton.addEventListener('click', () => {
    const cloneTodoItems = todoItems.slice(0);

    for (let i = 0; i < cloneTodoItems.length; i++) {
      const todo = cloneTodoItems[i];
      if (todo.checked) {
        const itemKey = todo.id;
        deleteTodo(itemKey);
      }
    }
  })

  list.addEventListener('click', event => {
    if (event.target.classList.contains('complete__todo') || event.target.classList.contains('todo__task')) {
      const itemKey = event.target.parentElement.dataset.key;
      toggleDone(itemKey);
    }

    if (event.target.classList.contains('delete__todo')) {
      const itemKey = event.target.parentElement.dataset.key;
      deleteTodo(itemKey);
    }
  });

  buttonsBlock.addEventListener('click', (e) => {
    let target = e.target;

    if (target.closest('#button-1')) {
      sortTodo('all');
    } else if (target.closest('#button-2')) {
      sortTodo('active');
    } else if (target.closest('#button-3')) {
      sortTodo('completed');
    }
  })

  document.addEventListener('DOMContentLoaded', () => {
    const ref = localStorage.getItem('todoItemsRef');
    if (ref) {
      todoItems = JSON.parse(ref);
      todoItems.forEach(t => {
        renderTodo(t);
      });
    }

    howItemsLeft();
  });
}

export default todo;