const formAdmin = document.querySelector('.form-admin');

formAdmin.addEventListener('submit', event => {
   event.preventDefault();

   const titulo = event.target.querySelector('.titulo-admin');
   const paragrafo = event.target.querySelector('.paragrafo-admin');

   criarPost(titulo.value, paragrafo.value, Date.now)

})
