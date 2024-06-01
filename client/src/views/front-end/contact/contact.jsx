import React from 'react';
import house from '../../../assets/house.jpg';
import './contact.css';
import { useState, useEffect } from 'react';
import GMB from '../../../assets/GMB-button.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function contact () {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [charsLeft, setCharsLeft] = useState(500); // Initialize with the maximum number of characters
  const [isSubmitted, setIsSubmitted] = useState(false); // Initialize with false
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === 'message') {
      setCharsLeft(250 - e.target.value.length); // Update the number of characters left
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Please fill out all fields');
      return;
    }

    try {
        await axios.post('http://localhost:3000/send-contact', formData);
        alert('Email sent successfully');
        setIsSubmitted(true); // Set isSubmitted to true after successful submission
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email');
      }
    };
    return (
        <div className="ct-fullscreen-image-container">
        <img src={house} alt="Responsive Full Viewport Image" className="ct-fullscreen-image"></img>
        <div className="ct-home-intro-text">
          <p className="ct-home-intro-text-1">Contact Us</p>
          <p className="ct-home-intro-text-2">We are ready to get started on your roofing or construction project</p>
          <p className='ct-home-intro-text-3'> immediately. Contact us 
          below for general information or</p>
          <p className="ct-home-intro-text-5">Click here for your free estimate!</p>
        </div>
        <div className='ct-form-container'>
          <div className='ct-form-container-expand'>
          <form className='ct-form-container-form' onSubmit={handleSubmit}>
          <label>
            <h4 className='input1-title'>Name:</h4>
            <input type="text" name="name" 
            value={formData.name} 
            onChange={handleChange} required 
            className='input1-input'/>
          </label>
          <label>
          <h4 className='input2-title'>Phone Number</h4>
            <input type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} required 
            className='input2-input'/>
          </label>
          <label>
          <h4 className='input2-title'>Email</h4>
            <input 
            type="email" 
            name="email" 
            value={formData.email}
             onChange={handleChange} required 
             className='input3-input'/>
          </label>
          <label>
          <h4 className='input4-title'>Message</h4>
            <textarea name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required
            className='input4-input' maxLength="250"></textarea>
          </label>
          {formData.message && <p style={{ color: charsLeft === 0 ? 'red' : charsLeft < 20 ? 'yellow' : 'green' }}>{charsLeft} characters left</p>}
          {isSubmitted ? (
        <p>Thank you for your submission!</p>
      ) : (
        <input type="submit" value="Submit" className="ct-form-submit"/>
      )}
        </form>
        <div className='ct-form-container-seperator'></div>
          </div>
          <div className="ct-form-container-info">
            <h4 className='ct-form-container-info-title'>Get In Touch</h4>
            <Link to="/views/front-end/finacing">
      <button className="ct-free-estimate-button">Free Estimate</button>
    </Link>
            <i className="fa-solid fa-phone ct-styling-phone-icon"></i><p className='ct-phone-number'>541-223-6206</p>
            <i className="fa-regular fa-clock ct-styling-clock-icon"></i><p className="ct-styling-clock-open">Mon - Fri</p>
            <p className='ct-styling-clock-text'>8:00am - 5:00pm</p>
            <i class="fa-solid fa-location-dot ct-location"></i><p className='ct-location-text'>Lane County, Oregon</p>
            <p className='ct-styling-license'>License Number: *License Number*</p>
            <a href="https://g.page/r/Ce5qGGUVXZ-fEB0/review" target="_blank" className="review-button">
            <img src={GMB} alt="Google My Business Review Button" className="review-button-image"></img>
    </a>
          </div>
        </div>
        <div className='ct-bottom-screen'>
        </div>
        <p className='ct-policy-text'>Your information is safe & secure + never shared with 3rd partys</p>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22943.42659993787!2d-123.11739725197756!3d44.043535996086895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e87263e9ee3%3A0xedc916654e740bc4!2sWendy&#39;s!5e0!3m2!1sen!2sus!4v1716758908534!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
    
    )
}