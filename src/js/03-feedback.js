import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

let objectValue;

input.addEventListener('input', _.throttle(localInput, 500));
textarea.addEventListener('input', _.throttle(localInput, 500));
form.addEventListener('submit', onSubmit);

objectParse();

function localInput() {
  objectValue = {
    email: `${input.value}`,
    message: `${textarea.value}`,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectValue));
}

function objectParse() {
  const dataLocal = localStorage.getItem(LOCALSTORAGE_KEY) || '';
  try {
    const dataLocalParse = JSON.parse(dataLocal);
    console.log(dataLocalParse);
    if (dataLocal) {
      input.value = dataLocalParse.email;
      textarea.value = dataLocalParse.message;
    }
  } catch (error) {
    console.log('parse ERROR!');
  }
}

function onSubmit(event) {
  event.preventDefault();
  objectParse();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
}
