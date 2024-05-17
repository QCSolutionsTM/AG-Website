import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    pepper: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    firstName: {
        type: String,
        required: true,
        min: 6,
    },
    company: {
        type: String,
    },
    countrya: {
        type: String,  // Assuming the country names are stored as strings
        required: true,
      },
      stateSel: {
        type: String,  // Assuming the state names are stored as strings
        required: true,   
    },
    districtSel: {
        type: String, // Assuming the city names are stored as strings
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    userStripeID: {
        type: String,
    }
   }, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;