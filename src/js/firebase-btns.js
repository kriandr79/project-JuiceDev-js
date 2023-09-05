import { userBtn, logoutBtn, authorizationModal } from "./firebase-functions";

const openAuthModalBtn = document.querySelector('.login-btn');
const closeAuthModalBtn = document.querySelector('.authorization-modal__btn-close');
const singUpBtn = document.querySelector('[data-action="sign-up"]');
const singInBtn = document.querySelector('[data-action="sign-in"]');
const signInForm = document.querySelector('#sign-in');
const signUpForm = document.querySelector('#sign-up');
const submitAuthBtn = document.querySelector('.authorization-modal__btn-submit');

singUpBtn.disabled = true;

singInBtn.addEventListener('click', event => {
  event.preventDefault();
  singUpBtn.classList.remove('active-link');
  singUpBtn.classList.add('inactive-link');
  singInBtn.classList.remove('inactive-link');
  singInBtn.classList.add('active-link');
  submitAuthBtn.textContent = 'Sign in';

  signInForm.classList.remove('hide-form');
  signUpForm.classList.add('hide-form');

  singUpBtn.disabled = false;
  singInBtn.disabled = true;
});

singUpBtn.addEventListener('click', event => {
  event.preventDefault();
  singUpBtn.classList.add('active-link');
  singUpBtn.classList.remove('inactive-link');
  singInBtn.classList.add('inactive-link');
  singInBtn.classList.remove('active-link');
  submitAuthBtn.textContent = 'Sign up';

  signInForm.classList.add('hide-form');
  signUpForm.classList.remove('hide-form');

  singUpBtn.disabled = true;
  singInBtn.disabled = false;
});

openAuthModalBtn.addEventListener('click', () => {
  authorizationModal.classList.remove('is-hidden');
});

closeAuthModalBtn.addEventListener('click', () => {
  authorizationModal.classList.add('is-hidden');
});

userBtn.addEventListener('click', () => {
  logoutBtn.classList.toggle('is-hidden');
});
