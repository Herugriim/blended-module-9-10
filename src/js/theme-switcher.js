import { refs } from './refs.js';
import { saveTheme, loadTheme } from './local-storage-api.js';

const currTheme = loadTheme();
document.body.classList = currTheme;
const lightTheme = 'theme-light';
const darkTheme = 'theme-dark';

refs.themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains(darkTheme)) {
    document.body.classList.replace(darkTheme, lightTheme);
    saveTheme(lightTheme);
  } else {
    document.body.classList.replace(lightTheme, darkTheme);
    saveTheme(darkTheme);
  }
});