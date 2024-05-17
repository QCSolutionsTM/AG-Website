import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
    title: { 
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
   }, {timestamps: true}
);

const Product = mongoose.model('Product', productSchema);

export default Product;