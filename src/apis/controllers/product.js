const Product = require('../models/product');

module.exports.getAllProducts = async function (req, res) {

    try {
        const products = await Product.find({});

        res.send(products);
    } catch (e) {
        res.status(500).send(e);
    }
};

module.exports.createProduct = async (req, res) => {
    try {
        const product = new Product({
            ...req.body
        });

        await product.save();

        res.send(product);
    } catch (e) {
        res.status(500).send(e);
    }
};

module.exports.editProduct = async (req, res) => {

    const properties = Object.keys(req.body);

    try {
        const product = await Product.findById(req.params.id);
        
        if (!product) {
            res.status(404).send(product);
        }

        properties.forEach(prop => (product[prop] = req.body[prop]));
        product.save();

        res.send(product);
    } catch (e) {
        res.status(404).send(e);
    }
};

module.exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).send({
                error: 'Can not find the resource',
                code: '404'
            });
        }

        product.isAvailable = false;
        await product.save();

        res.send(product);
    } catch (e) {
        res.status(500).send(e.message);
    }
}