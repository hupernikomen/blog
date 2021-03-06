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
   const titulo = document.querySelector('.tituloAdmin');
   const paragrafo = document.querySelector('.paragrafoAdmin');

   listarPost(select.value)
   .then( post => {

      titulo.value = post.titulo;
      paragrafo.value = post.paragrafo;
   })
}
