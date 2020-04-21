listagem = () => {

   return fetch('http://localhost:3000/posts')
   .then(response => {
      return response.json();
   })
   .then(json => {
      return json;
   })
}
