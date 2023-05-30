import throttle from 'lodash.throttle';
// npm i lodash.throttle
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateFormInput();

function onFormSubmit(event) {
  event.preventDefault();

  if (
    refs.email.value.trim().length === 0 ||
    refs.message.value.trim().length === 0
  ) {
    alert('Fill out the form before sending');
  } else {
    console.log('formData:', formData);

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
  }
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormInput() {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (formData) {
    refs.email.value = formData.email || '';
    refs.message.value = formData.message || '';
  }
}
