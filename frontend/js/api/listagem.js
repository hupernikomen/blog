const listarPosts = () => {

   return fetch('http://localhost:3000/posts')
   .then(response => {
      return response.json();
   })
   .then(json => {
      return json;
   })
   .catch ( erro => {
      console.log('Erro: ', erro)
   })
}


const listarPost = (id) => {
   return fetch(`http://localhost:3000/post/${id}`)
   .then ( response => {
      return response.json();
   })
   .then( json => {
      return json
   })
   .catch ( erro => {
      console.log('Erro: ', erro)
   })
}


const criarPost = (titulo, paragrafo, data) => {
   return fetch('http://localhost:3000/post', {
      method: 'POST',
      headers: {
         'Content-Type' : 'application/json'
      },
      body: JSON.stringify ({
         titulo,
         paragrafo, 
         data
      }) 
   })
   .then( response => {
      return response.body
   })
   .catch ( erro => {
      console.log('Erro: ', erro)
   })
}


const excluirPost = (id) => {
   return fetch(`http://localhost:4000/post/${id}`, {
      method: 'DELETE'
   })
}