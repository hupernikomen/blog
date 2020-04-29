const express = require('express');
const routes = express.Router();

const PostController = require('./controllers/PostController')

routes.get('/posts', PostController.index);
routes.get('/post/:id', PostController.show);
routes.post('/post', PostController.store);
routes.put('/post/:id', PostController.update);
routes.delete('/post/:id', PostController.destroy);

module.exports = routes;