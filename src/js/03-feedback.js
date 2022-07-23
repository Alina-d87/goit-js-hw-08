//подія інпут прослухоування
//провіряти стан сховища: якщо є дані заповнюємо ними поля, ні - поля порожні
//при сабміті форми очистити сховище ш поля форми
//додати lodash.throtle для оновлення локального сховища 500мс

const ref = {
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  form: document.querySelector('.feedback-form'),
};
console.log(ref);

const LOCALSTORAGE_KEY = 'feedback-form-state';

outputForm();

ref.form.addEventListener('submit', localInput);

function localInput(event) {
  event.preventDefault();
  const value = {
    email: `${ref.input.value}`,
    message: `${ref.textarea.value}`,
  };
  console.log(value);
  const localList = localStorage.getItem('LOCALSTORAGE_KEY');
  const listData = localList ? JSON.parse(localList) : [];
  localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(value));
  outputForm();
  ref.form.reset();
}

function outputForm() {
  ref.form.value = localStorage.getItem(LOCALSTORAGE_KEY) || '';
}
