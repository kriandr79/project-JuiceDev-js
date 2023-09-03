const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const allElements = document.querySelectorAll('*');

function addDarkThemeClass(element) {
    element.classList.add('dark-theme');
    const children = element.children;
    for (const child of children) {
        addDarkThemeClass(child);
    }
}

function removeDarkThemeClass(element) {
    element.classList.remove('dark-theme');
    const children = element.children;
    for (const child of children) {
        removeDarkThemeClass(child);
    }
}

function saveThemeToLocalStorage(theme) {
    localStorage.setItem('theme', theme);
}

function loadThemeFromLocalStorage() {
    return localStorage.getItem('theme');
}

function applyThemeFromLocalStorage() {
    const savedTheme = loadThemeFromLocalStorage();
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
        addDarkThemeClass(body);
        const liElements = document.querySelectorAll('li');
        liElements.forEach((liElement) => {
            liElement.classList.add('dark-theme');
        });
    }
}

function onThemeChange() {
    if (themeToggle.checked) {
        addDarkThemeClass(body);
        const liElements = document.querySelectorAll('li');
        liElements.forEach((liElement) => {
            liElement.classList.add('dark-theme');
        });
        saveThemeToLocalStorage('dark');
    } else {
        removeDarkThemeClass(body);
        const liElements = document.querySelectorAll('li');
        liElements.forEach((liElement) => {
            liElement.classList.remove('dark-theme');
        });
        saveThemeToLocalStorage('light');
    }
}

themeToggle.addEventListener('change', onThemeChange);


applyThemeFromLocalStorage();
