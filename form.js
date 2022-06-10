const scriptURL = 'https://script.google.com/macros/s/AKfycbx79Ax0sr5Oiyz4NJvU2bG3mHXWNx_QvrBPSdMoSsVZ0bESRHo7FCtpHzDPAcg9pSiz/exec';
const form = document.forms['potofolio-web'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});
