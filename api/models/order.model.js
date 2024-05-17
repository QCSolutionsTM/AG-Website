import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        stripeUserID: {
            type: String,
            required: true,
        },
        products: [{
            productID: {
                type: String,
                required: true,
            },
            productQty: {
                type: Number,
                required: true,
            },
            productPrice: {
                type: Number,
                required: true,
            },
            productTitle: {
                type: String,
                required: true,
            },
            productImg: {
                type: String,
                required: true,
            },
        },
    ],
    amount: {
        type: Number,
        required: true,
    },
    address: {
        type: Object,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
    },
    
   }, {timestamps: true}
);

const Order = mongoose.model('Order', OrderSchema);

export default Order;