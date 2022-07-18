const dragAndDrop = () => {
  const tasksListElement = document.querySelector('.todo__items'),
    taskElements = tasksListElement.querySelectorAll('.todo__item');

  const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;

    return nextElement;
  };

  // слушатели событий
  tasksListElement.addEventListener('dragstart', (event) => {
    event.target.classList.add('selected');
    setTimeout(() => {
      event.target.classList.add('hidden');
    },0)
  })

  tasksListElement.addEventListener('dragend', (event) => {
    event.target.classList.remove('selected');
    event.target.classList.remove('hidden');
  });

  tasksListElement.addEventListener('dragover', (event) => {
    event.preventDefault();

  const activeElement = tasksListElement.querySelector('.selected');
  const currentElement = event.target;
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains('todo__item');

  if (!isMoveable) {
    return;
  }

  // event.clientY — вертикальная координата курсора в момент,
  // когда сработало событие
  const nextElement = getNextElement(event.clientY, currentElement);

  // Проверяем, нужно ли менять элементы местами
  if (
    nextElement &&
    activeElement === nextElement.previousElementSibling ||
    activeElement === nextElement
  ) {
    // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
    return;
  }

  tasksListElement.insertBefore(activeElement, nextElement);
  });
}

export default dragAndDrop;