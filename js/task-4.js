const form = document.querySelector('.login-form');
const onFormSubmit = event => {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const info = {
    email: formEl.email.value.trim(),
    password: formEl.password.value.trim(),
  };
  if (formEl.email.value === '' || formEl.password.value === '') {
    return alert('All form fields must be filled in');
  }
  console.log(info);
  event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
