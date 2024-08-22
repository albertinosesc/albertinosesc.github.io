
const scriptURL = 'https://script.google.com/macros/s/AKfycbwY6eYC0JdcJGTiQE6Q6J_fVDrKJ8RL7KK6yIs2_Iq4xXvpM4fQqlfHVnarm-QZsEZk/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})