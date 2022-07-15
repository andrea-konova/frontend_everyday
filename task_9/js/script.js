const addButton = document.querySelector('.todo__add'),
  input = document.querySelector('.todo__text'),
  list = document.querySelector('.todo__items');

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
}

// слушател событий
addButton.addEventListener('click', (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
})

list.addEventListener('click', event => {
  if (event.target.classList.contains('complete__todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (event.target.classList.contains('delete__todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItemsRef');
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach(t => {
      renderTodo(t);
    });
  }
});