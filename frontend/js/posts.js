
const areaPostagens = document.querySelector('.main');

listarPosts().then((posts) => {  // Retorno do Fetch

   posts.forEach((post) => {

      areaPostagens.appendChild(exibePostagens(post));

   })
})


const exibePostagens = (post) => {

   const article = document.createElement('article');
   article.classList = 'post'

   const postagem =
      `
      <a href="leitura.html?id=${post._id}" class="container-post">
         <h2 class="titulo">${post.titulo}</h2>
         <p class="paragrafo">${post.paragrafo.substr(0, 250)}...</p>
      </a>

      <footer class="rodape-post">
         <span>${post.data}</span>
      </footer>

      <hr>
   `
   article.innerHTML = postagem

   return article

}
