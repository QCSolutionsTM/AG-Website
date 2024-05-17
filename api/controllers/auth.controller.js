import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { errorHandler } from '../utils/error.js';
import validator from 'validator';
import jwt from 'jsonwebtoken';
export const signup = async (req, res, next) => {
    const {
        username,
        email,
        password,
        firstName,
        company,
        countrya,
        stateSel,
        districtSel
    } = req.body;

    const requiredFields = ['username', 'email', 'password', 'firstName', 'countrya', 'stateSel', 'districtSel'];

    for (const field of requiredFields) {
        if (!req.body[field] || req.body[field].trim() === '') {
            return next(errorHandler(400, `${field} is required`));
        }
    }

    if (!validator.isEmail(email)) {
        return next(errorHandler(400, 'Invalid email address'));
    }

    try {
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return next(errorHandler(400, 'Email address is already taken. Please use a different one.'));
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(password)) {
            return next(errorHandler(400, 'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'));
        }

        if (!firstName || firstName.length < 4) {
            return next(errorHandler(400, 'First name must be at least 4 characters long.'));
        }

        if (username.length < 4 || username.length > 20 || !/^[a-zA-Z0-9]+$/.test(username)) {
            return next(errorHandler(400, 'Invalid username. It must be between 4 and 20 characters, containing only alphanumeric characters.'));
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return next(errorHandler(400, 'Username already exists. Please choose a different one.'));
        }

    } catch (error) {
        return next(errorHandler(500, 'Internal server error'));
    }

    // Hash password
    const pepper = crypto.randomBytes(32).toString('hex');
    const pepperedPassword = password + pepper;
    const hashedPassword = bcrypt.hashSync(pepperedPassword, 10);

    // Create new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        firstName,
        countrya,
        stateSel,
        pepper,  // Set the pepper field
        districtSel,
    });

    try {
        await newUser.save();
        res.json({ message: 'User registration successful' });

    } catch (error) {
        console.error('User registration error:', error);
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(errorHandler(400, 'Username and password are required'));
    }
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(400, 'User not found'));
        }
        const validPassword = bcrypt.compareSync(password + validUser.pepper, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'));
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const { password: userPassword, pepper: userPepper, isAdmin, __v, ...rest } = validUser._doc;


    res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json({ ...rest });
        

    } catch (error) {
        console.error('Login error:', error);
        next(error);
    }
}