const theme = () => {
  const toggleThemeButton = document.querySelector('.toggle-button');

  let darkTheme = false;
  let bodyColor = '#E3E4F1',
    todoDark = '#E3E4F1',
    white = '#ffffff',
    todoTask = '#494C6B',
    todoTaskCompleted = '#D1D2DA',
    textDark = '#9495A5';

  const changeTheme = () => {
    const header = document.querySelector('.header'),
      checklistIcon = document.querySelector('.checklist-icon');
    let root = document.documentElement;

    if (!darkTheme) {
      localStorage.setItem('darkTheme', '');

      toggleThemeButton.classList.remove('toggle-button-dark');
      header.classList.remove('header-dark');
      checklistIcon.src="img/to-do-list.png";

      bodyColor = '#E3E4F1';
      todoDark = '#E3E4F1';
      white = '#ffffff';
      todoTask = '#494C6B';
      todoTaskCompleted = '#D1D2DA';
      textDark = '#9495A5';

      darkTheme = true;
    } else {
      localStorage.setItem('darkTheme', true);

      toggleThemeButton.classList.add('toggle-button-dark');
      header.classList.add('header-dark');
      checklistIcon.src="img/to-do-list-white.png";

      bodyColor = '#171823';
      todoDark = '#979797';
      white = '#25273D';
      todoTask = '#C8CBE7';
      todoTaskCompleted = '#4D5067';
      textDark = '#5B5E7E';

      darkTheme = false;
    }

    root.style.setProperty('--dark', bodyColor);
    root.style.setProperty('--todo-dark', todoDark);
    root.style.setProperty('--white', white);
    root.style.setProperty('--todo-task', todoTask);
    root.style.setProperty('--todo-task-c', todoTaskCompleted);
    root.style.setProperty('--text-dark', textDark);
  }

  toggleThemeButton.addEventListener('click', changeTheme);

  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkTheme') !== null) {
      darkTheme = localStorage.getItem('darkTheme');
    } else {
      darkTheme = darkTheme;
    }
    changeTheme();
  });
}

export default theme;