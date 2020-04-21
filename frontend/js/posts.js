
const areaPostagens = document.querySelector('.main');

listagem().then((posts) => {  // Retorno do Fetch

   posts.forEach((post) => {

      areaPostagens.appendChild( exibePostagem(post) );
      
   })
})

exibePostagem = (post) => {
   console.log(post)

   const article = document.createElement('article');
   article.classList = 'post'

   const postagem = 
   `
      <a href="leitura.html/${post._id}" class="container-post">
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
