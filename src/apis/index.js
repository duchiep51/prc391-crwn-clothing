const productRoutes = require('./routers/product');
const categoryRoutes = require('./routers/category');
const userRoutes = require('./routers/user');
const orderRoutes = require('./routers/order');

module.exports = app => {
    app.use('/products', productRoutes);
    app.use('/categories', categoryRoutes);
    app.use('/users', userRoutes);
    app.use('/orders', orderRoutes);
};