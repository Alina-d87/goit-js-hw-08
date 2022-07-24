import _throttle from 'lodash';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
console.log(form.elements);
outputForm();

form.addEventListener('input', saveDataForm);
textarea.addEventListener('submit', onTextInput);

function saveDataForm(event) {
  const dataForm = {
    email: `${form.elements.target}`,
    message: `${textarea.value}`,
  };
  console.log(dataForm);
  localStorage.setItem(LOCALSTORAGE_KEY, dataForm);
  outputForm();
}

function outputForm() {
  form.value = localStorage.getItem(LOCALSTORAGE_KEY) || '';
}

function onTextInput(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

//outputForm();

//ref.form.addEventListener('submit', localInput);

//function localInput(event) {
//  event.preventDefault();
//  const value = {
//    email: `${input.value}`,
//    message: `${textarea.value}`,
//  };
//  console.log(value);
//  const localList = localStorage.getItem('LOCALSTORAGE_KEY');
//  const listData = localList ? JSON.parse(localList) : [];
//  localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(value));
//  outputForm();
//  ref.form.reset();
//}
