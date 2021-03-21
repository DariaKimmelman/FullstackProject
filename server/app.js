const express = require('express');
const cors = require('cors');
const productRoutes = require('./Routes/products');
const postRoutes = require('./Routes/posts');
const userRoutes = require('./Routes/users');
const app = express();
const path = require('path')

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/products', productRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3001, () => console.log('server is running..'));
