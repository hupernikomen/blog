const formataData = (data) => {
   
   const dataFormatada = new Date(data).toLocaleDateString();

   return dataFormatada;
}