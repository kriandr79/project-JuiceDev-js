import { firebaseRegistration, firebaseAuthorization } from './firebase-functions'

const sign_up = document.getElementById('sign-up');
const sign_in = document.getElementById('sign-in');

// Registration
sign_up.addEventListener('submit', event => {

    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const theme = localStorage.getItem('theme');

    firebaseRegistration(email, password, name, theme)

})

// Authorization
sign_in.addEventListener('submit', async (event) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    firebaseAuthorization(email, password)
})