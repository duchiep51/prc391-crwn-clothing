const User = require('../models/user');

module.exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('orders').lean();

        res.status(200).send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send(e);
    }
}

module.exports.signUp = async (req, res) => {
    try {
        const user = new User({ ...req.body });

        await user.save();

        res.status(201).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
}

module.exports.signIn = async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );

        res.send({
            message: 'Login successfully!!'
        });
    } catch (e) {
        res.status(401).send(e.message);
    }
}

module.exports.editProfile = async (req, res) => {
    const properties = Object.keys(req.body);

    try {
        const user = req.user;

        properties.forEach(prop => user[prop] = req.body[prop]);

        user.save();

        res.send(user);
    } catch (e) {
        res.status(404).send(e);
    }
}
