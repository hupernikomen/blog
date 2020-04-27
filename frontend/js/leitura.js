const areaPostagem = document.querySelector('.main');

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');


listarPost(id).then( post => {
   areaPostagem.appendChild(exibePostagem(post))

})

const exibePostagem = (post) => {
   const article = document.createElement('article');
   article.classList = 'leitura'

   const postagem = `

      <i onclick="voltarPaginaAnterior()" class="btn-voltar fas fa-chevron-left"></i>
      <h1 class="titulo-leitura">${post.titulo}</h1>

      <span class="data-leitura">${post.data}</span>
      <p class="paragrafo-leitura">${post.paragrafo}</p>
   `

   article.innerHTML = postagem;

   return article;
}

const voltarPaginaAnterior = () => {

   window.history.back()
}