listagemPosts = () => {

   return fetch('http://localhost:3000/posts')
   .then(response => {
      return response.json();
   })
   .then(json => {
      return json;
   })
}


listagemPost = (id) => {
   return fetch(`http://localhost:3000/post/${id}`)
   .then ( response => {
      return response.json();
   })
   .then( json => {
      return json
      console.log(json)
   })
}