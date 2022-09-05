const openModal = document.querySelector('.email');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');
openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal_show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal_show');
});


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_0a11r99';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mnsaje enviado correctamente');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});