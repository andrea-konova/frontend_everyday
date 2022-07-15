const addButton = document.querySelector('.todo__add'),
  input = document.querySelector('.todo__text'),
  list = document.querySelector('.todo__items');

let todoItems = [];

const renderTodo = (todo) => {
  const isChecked = todo.checked ? 'done': '';

  const node = document.createElement("li");
  node.setAttribute('class', `todo__item ${isChecked}`);
  node.setAttribute('data-key', todo.id);

  node.innerHTML = `
    <input type="checkbox" id="${todo.id}" class="todo__complete todo__checkbox">
    <label for="${todo.id}"></label>
    <span class="todo__task">${todo.text}</span>
    <button class="delete__todo"></button>
  `;

  list.append(node);
}

const addTodo = (text) => {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

addButton.addEventListener('click', (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
  console.log(text);
})