const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EGallery', { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => console.log('Connected To MondogDB')
)