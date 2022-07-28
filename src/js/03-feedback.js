import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const throttleLocalInput = throttle(localInput, 500);

let objectValue;

objectParse();

input.addEventListener('input', throttleLocalInput);
textarea.addEventListener('input', throttleLocalInput);
form.addEventListener('submit', onSubmit);

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
      input.value = dataLocalParse.email || '';
      textarea.value = dataLocalParse.message || '';
      objectValue = {
        email: input.value,
        message: textarea.value,
      };
    }
  } catch (error) {
    ('parse ERROR!');
  }
}

function onSubmit(event) {
  event.preventDefault();
  objectParse();
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
