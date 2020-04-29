const formAdmin = document.querySelector('.form-admin');
const titulo = document.querySelector('.titulo-admin');
const paragrafo = document.querySelector('.paragrafo-admin');
const formSelect = document.querySelector('[data-select]');


const id_post = [];

listarPosts().then((post) => {
   post.map((post) => {
      id_post.push(post._id);
   })

})

formAdmin.addEventListener('submit', event => {
   event.preventDefault();

   if (id_post.includes(formSelect.value)) {

      atualizarPost(formSelect.value, titulo.value, paragrafo.value);

   } else {

      criarPost(titulo.value, paragrafo.value, Date.now);
   }

   limparCampos();
})

const limparCampos = () => {
   titulo.value = '';
   paragrafo.value = '';
   formSelect.selectedIndex = id_post.length;
}