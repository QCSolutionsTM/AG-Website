import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import nodemailer from 'nodemailer';
import http from 'http';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
// Create an instance of the Stripe API client
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });





const app = express();
app.use(express.json());

// Serve the index.html file for all GET requests

var server= http.Server(app);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.listen(3000, () => {
    console.log('server is running on port 3000!');
});

app.post('/send-email', async (req, res) => {
  const { name, city, number, email } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail', // replace with your email service
    auth: {
      user: 'quintin@modelownedlc.com', // replace with your email
      pass: 'ykux mxrf gram vuhq' // replace with your password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptionsUser = {
    from: 'quintin@modelownedlc.com', // sender address
    to: email, // list of receivers
    subject: 'Thank you for your submission', // Subject line
    html: `
    <img src="https://hvacenergysolutions.com/images/free-estimate.png" alt="Your Image" style="width: 100%; height: auto;" />
    <p>Dear ${name},</p>
    <p style="color: red;">Thank you for your submission. We will get back to you soon.</p>
    <p>Best,</p>
    <p>Your Team</p>
  ` // HTML body
}

  let mailOptionsSelf = {
    from: 'quintin@modelownedlc.com', // sender address
    to: 'quintin@modelownedlc.com', // list of receivers
    subject: 'New Form Submission', // Subject line
    text: `Name: ${name}\nCity: ${city}\nNumber: ${number}\nEmail: ${email}` // plain text body
  }

  try {
    await Promise.all([
      transporter.sendMail(mailOptionsUser),
      transporter.sendMail(mailOptionsSelf)
    ]);
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
  }
});

app.post('/send-contact', async (req, res) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail', // replace with your email service
    auth: {
      user: 'quintin@modelownedlc.com', // replace with your email
      pass: 'ykux mxrf gram vuhq' // replace with your password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptionsUser = {
    from: 'quintin@modelownedlc.com', // sender address
    to: req.body.email,
    subject: 'Thank you for your submission', // Subject line
    html: `
    <img src="https://hvacenergysolutions.com/images/free-estimate.png" alt="Your Image" style="width: 100%; height: auto;" />
    <p>text: Name: ${req.body.name}\nPhone: ${req.body.phone}\nMessage: ${req.body.message}</p>
    <p style="color: red;">Thank you for your submission. We will get back to you soon.</p>
    <p>Best,</p>
    <p>Your Team</p>
  ` // HTML body
}

  let mailOptionsSelf = {
    from: 'quintin@modelownedlc.com', // sender address
    to: 'quintin@modelownedlc.com', // list of receivers
    subject: 'New Form Submission', // Subject line
    text: `Name: ${req.body.name}\nPhone: ${req.body.phone}\nMessage: ${req.body.message}`
  }

  try {
    await Promise.all([
      transporter.sendMail(mailOptionsUser),
      transporter.sendMail(mailOptionsSelf)
    ]);
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
  }
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  console.log(err);
  return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
  })
})