const mongoose =require('mongoose');

const Post = mongoose.model('Post');

module.exports = {
   async store(req, res) {

      const post = await Post.create(req.body)
      return res.json(post)
   },

   async index(req, res) {
      
      const posts = await Post.find();
      return res.json(posts)
   },

   async show(req, res) {
      
      const post = await Post.findById(req.params.id)
      return res.json(post)
   },

   async destroy(req, res) {
      
      await Post.findByIdAndDelete(req.params.id)
      res.send('Excluido com sucesso')
   }
}