const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function addDarkThemeClass(element) {
    element.classList.add('dark-theme');
}

function removeDarkThemeClass(element) {
    element.classList.remove('dark-theme');
}

function saveThemeToLocalStorage(theme) {
    localStorage.setItem('theme', theme);
}

function loadThemeFromLocalStorage() {
    return localStorage.getItem('theme');
}

function applyTheme(theme) {
    if (theme === 'dark') {
        themeToggle.checked = true;
        addDarkThemeClass(body);
    } else {
        themeToggle.checked = false;
        removeDarkThemeClass(body);
    }

    const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
        if (theme === 'dark') {
            addDarkThemeClass(element);
        } else {
            removeDarkThemeClass(element);
        }
    });
}

function onThemeChange() {
    if (themeToggle.checked) {
        saveThemeToLocalStorage('dark');
        applyTheme('dark');
    } else {
        saveThemeToLocalStorage('light');
        applyTheme('light');
    }
}

themeToggle.addEventListener('change', onThemeChange);


const savedTheme = loadThemeFromLocalStorage();
applyTheme(savedTheme);


const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList') {
            const addedNodes = Array.from(mutation.addedNodes);
            addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    addDarkThemeClass(node);
                }
            });
        }
    });
});


observer.observe(body, { childList: true, subtree: true });
