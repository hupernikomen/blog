const express = require('express');
const routes = express.Router();

const PostController = require('./controllers/PostController')

routes.get('/posts', PostController.index);
routes.get('/post/:id', PostController.show);
routes.post('/post', PostController.store);
routes.delete('/post/:id', PostController.destroy);

module.exports = routes;