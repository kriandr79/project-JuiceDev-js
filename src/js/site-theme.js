const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    const allElements = document.querySelectorAll('*'); 

    if (themeToggle.checked) {
        body.classList.add('dark-theme');

        allElements.forEach((element) => {

            element.classList.add('dark-theme'); 
        });
    } else {
        body.classList.remove('dark-theme');

        allElements.forEach((element) => {
            element.classList.remove('dark-theme');
            element.removeAttribute('style'); 
        });
    }
});
