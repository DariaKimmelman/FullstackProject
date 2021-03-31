const express = require('express');
const cors = require('cors');
const productRoutes = require('./Routes/products');
const postRoutes = require('./Routes/posts');
const userRoutes = require('./Routes/users');
const orderRoutes = require('./Routes/orders');
const app = express();
const path = require('path')

const uri = process.env.MONGODB_URI;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/products', productRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use(express.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT || 3001, () => console.log('server is running..'));
