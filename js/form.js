export function initForm() {
  const form = document.getElementById('contact-form');
  const fields = [
    { input: 'nom', error: 'error-nom', validate: (val) => val.trim().length >= 2, msg: 'Le nom doit contenir au moins 2 caractères.' },
    { input: 'email', error: 'error-email', validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), msg: 'Veuillez entrer une adresse email valide.' },
    { input: 'message', error: 'error-message', validate: (val) => val.trim().length >= 10, msg: 'Le message doit contenir au moins 10 caractères.' }
  ];

  const validateField = (field) => {
    const inputEl = document.getElementById(field.input);
    const errorEl = document.getElementById(field.error);
    const isValid = field.validate(inputEl.value);
    inputEl.classList.toggle('invalid', !isValid);
    errorEl.textContent = isValid ? '' : field.msg;
    return isValid;
  };

  fields.forEach(field => {
    document.getElementById(field.input).addEventListener('input', () => validateField(field));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = fields.every(validateField);
    if (isValid) {
      const success = document.getElementById('form-success');
      success.hidden = false;
      form.reset();
      setTimeout(() => success.hidden = true, 4000);
    }
  });
}