// IMPORTS
import { initializeApp } from "firebase/app";
// Database imports
import { doc, getFirestore, collection, setDoc, getDoc, getDocs, deleteDoc } from "firebase/firestore";
// Authentication imports
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
// Notify
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { loadBookLS } from "./shopping-list.js";

// Cradentials
const firebaseConfig = {
    apiKey: "AIzaSyD6y87qpAaTmo8ySNzJXmc9V4SbIIZw8Cg",
    authDomain: "project-juicedev-js.firebaseapp.com", 
    projectId: "project-juicedev-js", 
    storageBucket: "project-juicedev-js.appspot.com", 
    messagingSenderId: "829149765123", 
    appId: "1:829149765123:web:764b4955f69bea51d43836"
};

// Initialization
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

// Form methods
const loginBtn = document.querySelector('.login-btn');
export const userBtn = document.querySelector('.user-btn');
const userBtnName = document.querySelector('.user-btn-name');
export const logoutBtn = document.querySelector('.logout-btn');
export const authorizationModal = document.querySelector('.authorization-modal');
const shoppingListLink = document.querySelector('#shoppingListLink');

const paramsForNotify = {
    position: 'center-top',
    timeout: 3000,
    width: '350px',
    fontSize: '18px'
};

// Checking of user status
onAuthStateChanged(auth, (data) => {

    if (data === null || data === undefined) {
        userBtn.classList.add('is-hidden');
        loginBtn.classList.remove('is-hidden');
        loginBtn.dataset.status = false;
        userBtnName.innerHTML= '';
        shoppingListLink.classList.add('is-hidden');
    } else {
        userBtnName.innerHTML = auth.currentUser.displayName;
        loginBtn.dataset.status = true;
        authorizationModal.classList.add('is-hidden')
        userBtn.classList.remove('is-hidden');
        loginBtn.classList.add('is-hidden');
        shoppingListLink.classList.remove('is-hidden');
        firebaseGetAllItems(auth.currentUser.displayName);
    }
})

// Logout function
function firebaseLogout() {
    signOut(auth).then(() => localStorage.clear()).catch(error => console.log(error));
}

// Registration

//     This function creates a new user

//     user_email
//     user_password
//     user_nickname
//     theme - Dark/Light theme
//     returns {Promise<void>} - Promise that is resolved when the registration is successful.

export async function firebaseRegistration(user_email, user_password, user_nickname, theme) {

    const addUserDataToDataBase = async () => {

        const user_data_collection = collection(db, 'Users');
        const docRef = doc(user_data_collection, user_nickname);

        setDoc(docRef, {
            email: user_email,
            nickname: user_nickname,
            theme: theme
        }).catch(error => console.log(error));
    }

    try {
        const data = await createUserWithEmailAndPassword(auth, user_email, user_password);

        await updateProfile(data.user, { displayName: user_nickname })
            .then(() => {
                userBtnName.innerHTML = auth.currentUser.displayName;
            })
        
        await addUserDataToDataBase();
        Notify.success(`Hello, ${auth.currentUser.displayName}! Welcome to Bookshelf!`, paramsForNotify);
    }

    catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            Notify.failure('This Email is already in use.', paramsForNotify);
        } else {
            Notify.failure('Oops! Something went wrong! Try reloading the page or make another choice!', paramsForNotify);
            console.log(error);
        }
    }
}

// Authorization

//     user_email
//     user_password
//     returns {Promise<void>} - Promise that is resolved when the registration is successful.

export function firebaseAuthorization(user_email, user_password) {
    if (!auth.currentUser) {

        signInWithEmailAndPassword(auth, user_email, user_password)
            .then(() => {
                firebaseGetAllItems(auth.currentUser.displayName);
                Notify.success(`Hello, ${auth.currentUser.displayName}! Welcome to Bookshelf!`, paramsForNotify);
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/user-not-found':
                        Notify.failure('User with this email was not found.', paramsForNotify);
                        break;
                    case 'auth/wrong-password':
                        Notify.failure('Incorrect password!', paramsForNotify);
                        break;
                    case 'auth/invalid-email':
                        Notify.failure('Incorrect email!', paramsForNotify);
                        break;
                    default:
                        Notify.failure('Oops! Something went wrong! Try reloading the page or make another choice!', paramsForNotify);
                        console.error(error);
                        break;
                }
            });

    } else {
        Notify.failure('The user is already logged in!', paramsForNotify);
    }
}

// Database methods

// Save book information to a database.
//    bookID
//    bookData - Book data to save.


export async function firebaseAddItem(bookID, bookData) {
    try {
        const userCollection = collection(db, auth.currentUser.displayName);
        const docRef = doc(userCollection, bookID);

        await setDoc(docRef, bookData);
    } catch (error) {
        console.error("Error saving document:", error);
    }
}

// Delete book from database
    // bookID - The ID of the book to delete.

export async function firebaseDeleteItem(bookID) {

    const userCollection = collection(db, auth.currentUser.displayName);
    const docRef = doc(userCollection, bookID);

    try {
        await deleteDoc(docRef);
    } catch (error) {
        console.error(error);
    }
}

// Get all books from database
// Gets all of the user's books from the database and stores them in localStorage.
//     userName - The name of the user whose books to retrieve.

export async function firebaseGetAllItems(userName) {

    const userCollection = collection(db, userName);
    const querySnapshot = await getDocs(userCollection);

    querySnapshot.forEach((doc) => {
        const item = {
            id: doc.id,
            data: doc.data(),
        };
        localStorage.setItem(item.id, JSON.stringify(item.data));
    });
}

// Log out
logoutBtn.addEventListener('click', () => {
    firebaseLogout();
    logoutBtn.classList.toggle('is-hidden');
    Notify.info(`We're going to miss you, ${auth.currentUser.displayName} ...`, paramsForNotify);
});