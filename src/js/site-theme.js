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

function onThemeChange() {
    if (themeToggle.checked) {
        addDarkThemeClass(body);
        const liElements = document.querySelectorAll('li');
        liElements.forEach((liElement) => {
            liElement.classList.add('dark-theme');
        });
    } else {
        removeDarkThemeClass(body);
        const liElements = document.querySelectorAll('li');
        liElements.forEach((liElement) => {
            liElement.classList.remove('dark-theme');
        });
    }
}

themeToggle.addEventListener('change', onThemeChange);
