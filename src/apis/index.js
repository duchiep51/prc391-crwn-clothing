const productRoutes = require('./routers/product');
const categoryRoutes = require('./routers/category');
const userRoutes = require('./routers/user');
const orderRoutes = require('./routers/order');
const cors = require('cors');

module.exports = app => {
    app.use('/products', productRoutes);
    app.use('/categories', categoryRoutes);
    app.use('/users', userRoutes);
    app.use('/orders', cors(), orderRoutes);
};