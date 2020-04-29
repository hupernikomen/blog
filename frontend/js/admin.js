const select = document.querySelector('[data-select]');

listarPosts()
.then( post => {
   
   post.forEach( post => {

      const option = document.createElement('option');
      option.textContent = post.titulo;
      option.value = post._id;

      select.prepend(option);
      
   })
})

const carregarPost = () => {
   const titulo = document.querySelector('.titulo-admin');
   const paragrafo = document.querySelector('.paragrafo-admin');

   listarPost(select.value)
   .then( post => {

      titulo.value = post.titulo;
      paragrafo.value = post.paragrafo;
   })
}
