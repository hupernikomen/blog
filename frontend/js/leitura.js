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

      <h1 class="tituloLeitura">${post.titulo}</h1>

      <span class="dataLeitura">${formataData(post.data)}</span>
      <p class="paragrafoLeitura">${post.paragrafo}</p>
   `

   article.innerHTML = postagem;

   return article;
}

const voltarPaginaAnterior = () => {

   window.history.back()
}
