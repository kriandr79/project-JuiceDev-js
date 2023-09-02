const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const allElements = document.querySelectorAll('*');

function onThemeChange() {
    if (themeToggle.checked) {
        body.classList.add('dark-theme');
        allElements.forEach((element) => {
            element.classList.add('dark-theme');
        });
    } else {
        body.classList.remove('dark-theme');
        allElements.forEach((element) => {
            element.classList.remove('dark-theme');
        });
    }
}

themeToggle.addEventListener('change', onThemeChange);
