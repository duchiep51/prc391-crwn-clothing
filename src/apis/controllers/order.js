const Order = require('../models/order');
const OrderDetail = require('../models/OrderDetail');

module.exports.createOrder = async (req, res) => {

    const item = req.body;
    const details = item.details;

    try {
        const order = new Order({
            userId: item.userId,
            totalPrice: item.totalPrice
        });

        await order.save();

        details.forEach(async detail => {
            const orderDetail = new OrderDetail({
                ...detail,
                orderId: order._id
            })

            await orderDetail.save();
        });

        res.send(order);
    } catch (e) {
        res.status(500).send(e.message);
    }
}