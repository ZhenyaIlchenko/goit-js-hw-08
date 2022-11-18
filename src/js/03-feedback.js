import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

let formData = {};

function populateData() {
  const saveData = localStorage.getItem(STORAGE_KEY);

  if (saveData) {
    const parsedData = JSON.parse(saveData);

    for (const key in parsedData) {
      if (Object.hasOwnProperty.call(parsedData, key)) {
        refs.form[key].value = parsedData[key];
      }
    }
    formData = parsedData;
  }
}
populateData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  if (
    refs.form.elements.message.value === '' ||
    refs.form.elements.email.value === ''
  ) {
    alert('Всі поля мають бути заповнені!');
    return;
  }
  console.log('Form is submitted');
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
