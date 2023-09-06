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
    const allElements = document.querySelectorAll('*');
    if (theme === 'dark') {
        themeToggle.checked = true;
        addDarkThemeClass(body);
        allElements.forEach(addDarkThemeClass);
    } else {
        themeToggle.checked = false;
        removeDarkThemeClass(body);
        allElements.forEach(removeDarkThemeClass);
    }
}

function applyThemeToAddedNodes(addedNodes, theme) {
    addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            if (theme === 'dark') {
                addDarkThemeClass(node);
            } else {
                removeDarkThemeClass(node);
            }

            const childElements = node.querySelectorAll('*');
            childElements.forEach((child) => {
                if (theme === 'dark') {
                    addDarkThemeClass(child);
                } else {
                    removeDarkThemeClass(child);
                }
            });
        }
    });
}

function onThemeChange() {
    const theme = themeToggle.checked ? 'dark' : 'light';
    saveThemeToLocalStorage(theme);
    applyTheme(theme);
}

themeToggle.addEventListener('change', onThemeChange);

const savedTheme = loadThemeFromLocalStorage();
applyTheme(savedTheme);

const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList') {
            const addedNodes = Array.from(mutation.addedNodes);
            applyThemeToAddedNodes(addedNodes, loadThemeFromLocalStorage());
        }
    });
});

observer.observe(body, { childList: true, subtree: true });
