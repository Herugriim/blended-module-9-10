const THEME_KEY = "page-theme";

export function saveTheme(theme){
  localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme(){
  return localStorage.getItem(THEME_KEY) || 'theme-dark';
}