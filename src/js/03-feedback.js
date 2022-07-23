//подія інпут прослухоування
//провіряти стан сховища: якщо є дані заповнюємо ними поля, ні - поля порожні
//при сабміті форми очистити сховище ш поля форми
//додати lodash.throtle для оновлення локального сховища 500мс

const ref = {
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  button: document.querySelector('button'),
  form: document.querySelector('.feedback-form'),
};
console.log(ref);

ref.form.addEventListener('submit', localInput);

function localInput(event) {
  event.preventDefault();
  const value = {
    email: `${ref.input.value}`,
    message: `${ref.textarea.value}`,
  };
  console.log(value);
  storage(value);
  ref.input.value = '';
  ref.textarea.value = '';
}

function storage(value) {
  const valueLocal = JSON.stringify(value);
  localStorage.setItem('feedback-form-state', JSON.stringify(value));
}
