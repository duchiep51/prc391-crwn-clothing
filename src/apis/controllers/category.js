const Category = require('../models/category');

module.exports.createCategory = async (req, res) => {
    try {
        const category = new Category({...req.body})
        await category.save();

        res.send(category);
    } catch (e) {
        res.status(500).send(e.message);
    }
}

module.exports.getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find({});

        res.send(categories);
    } catch (e) {
        res.status(500).send(e.message);
    }
}