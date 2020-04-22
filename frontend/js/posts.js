
const areaPostagens = document.querySelector('.main');

listagemPosts().then((posts) => {  // Retorno do Fetch

   posts.forEach((post) => {

      areaPostagens.appendChild( exibePostagem(post) );
      
   })
})


exibePostagem = (post) => {

   const article = document.createElement('article');
   article.classList = 'post'

   const postagem = 
   `
      <a onclick="${listagemPost(post._id)}" class="container-post">
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
