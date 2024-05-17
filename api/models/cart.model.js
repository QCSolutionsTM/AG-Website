import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema(
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
        }]
    
   }, {timestamps: true}
);

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;