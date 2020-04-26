const areaPostagem = document.querySelector('.main');

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');


listarPost(id).then( post => {
   areaPostagem.appendChild(exibePostagem(post))

})

exibePostagem = (post) => {
   const article = document.createElement('article');
   article.classList = 'leitura'

   const postagem = `

   <div class="topo-post">
      <i onclick="voltarPaginaAnterior()" class="btn-voltar fas fa-chevron-left"></i>
      <h1 class="titulo-leitura">${post.titulo}</h1>
   </div>

      <span class="data-leitura">${post.data}</span>
      <p class="paragrafo-leitura">${post.paragrafo}</p>
   `

   article.innerHTML = postagem;

   return article;
}

voltarPaginaAnterior = () => {
   window.history.back()
}