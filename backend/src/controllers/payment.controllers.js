import { instance } from "../config/paymentConfig.js";


const paymentController = async (req, res) => {
    const { amount } = req.body;
    const options = {
      amount: Number(amount * 100), // amount in the smallest currency unit
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    return res.status(200).json({
      success: true,
      order: order,
    });
};



export {
    paymentController
}

  