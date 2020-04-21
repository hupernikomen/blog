const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema ({
   titulo: {
      type: String,
      required: true
   },

   paragrafo: {
      type: String,
      required: true
   },

   data: {
      type: Date,
      default: Date.now
   }
})

mongoose.model('Post', PostSchema);