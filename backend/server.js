const express = require('express');  //  -> npm install express
const cors = require('cors');  //  -> npm install cors
const mongoose = require('mongoose');  //  -> npm install mongoose
const requireDir = require('require-dir'); //  -> npm install requireDir

const app = express();
app.use(express.json());
app.use(cors()); 

mongoose.connect('mongodb+srv://hupernikomen:hpM422354@cluster0-jyfxc.mongodb.net/blog?retryWrites=true&w=majority',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

requireDir('./src/models');

app.use('/', require('./src/routes'));

app.listen(3000, () => {
   console.log("Servidor rodando na porta 3000");
});