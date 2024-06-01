import React from 'react';
import house from '../../../assets/house.jpg';
import { useState } from 'react';
import image1 from '../../../assets/website-ag/image1.jpg'
import image2 from '../../../assets/website-ag/image2.jpg'
import image13 from '../../../assets/website-ag/image13.jpg'
import image41 from '../../../assets/website-ag/image41.jpg'
import image30 from '../../../assets/website-ag/image30.jpg'
import image39 from '../../../assets/website-ag/image39.jpg'
import image33 from '../../../assets/website-ag/image33.jpg'
import image34 from '../../../assets/website-ag/image34.jpg'
import image9 from '../../../assets/website-ag/image9.jpg'
import image56 from '../../../assets/website-ag/image56.jpg'
import image66 from '../../../assets/website-ag/image66.jpg'
import image67 from '../../../assets/website-ag/image67.jpg'
import image71 from '../../../assets/website-ag/image71.jpg'
import image89 from '../../../assets/website-ag/image89.jpg'
import image90 from '../../../assets/website-ag/image90.jpg'
import image100 from '../../../assets/website-ag/image98.jpg'
import image111 from '../../../assets/website-ag/image111.jpg'
import satifcation2 from '../../../assets/saa2.png';
import ggg from '../../../assets/ggg.jpg';
import './ourwork.css';
export default function about () {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
      setSelectedImage(image);
      setModalIsOpen(true);
  };

  const closeModal = () => {
      setModalIsOpen(false);
  };

  const handleBackgroundClick = (event) => {
      if (event.target === event.currentTarget) {
          closeModal();
      }
  };

  const images = [
      image1, image9, image13, image30, image33, image34, image39, 
      image41, image56, image66, image67, image71, image100, image90, 
      image100, image111
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({
    city: '',
    name: '',
    number: '',
    email: '', // Add this line
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    { question: "What's your City?", type: 'select', name: 'city', options: ['Eugene/Springfield', 'Salem', 'Beaverton', 'Eagle Creek', 'Silverton', 'Hillsboro', 'Albany', 'Other'] },
    { question: 'Name', type: 'text', name: 'name' },
    { question: 'Phone Number', type: 'text', name: 'number' },
    { question: 'What is your email?', type: 'email', name: 'email' } // Add this line
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    const currentQuestionName = questions[currentQuestion].name;
    if (formData[currentQuestionName]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert('Please fill out this field before moving forward.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.city || !formData.name || !formData.number || !formData.email) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    try {
      await axios.post('http://localhost:3000/send-email', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


  return (
      <div className='mt-3'>
          <div className="ow-fullscreen-image-container">
         <img src={house} alt="Responsive Full Viewport Image" className="ow-fullscreen-image"></img>
          <div className='ow-fullscreen-title'>
            <h1 className='ow-fullscreen-title-text'>Check out Our Work</h1>
            <h4 className='ow-fullscreen-title-text2'>See how we have changed peoples lives, throughout are amazing work.</h4>
          </div>
         </div>
          <div className='containerimg'>
              <div className="gallery">
                  {images.map((image, index) => (
                      <div className="gallery__item" key={index} onClick={() => openModal(image)}>
                          <img src={image} alt={`house-${index}`} className="gallery__img" />
                          <div className="gallery__icon">+</div>
                      </div>
                  ))}
              </div>
          </div>
          {modalIsOpen && (
              <div className="modal" onClick={handleBackgroundClick}>
                  <div className="modal-content">
                      <span className="close" onClick={closeModal}>&times;</span>
                      <img src={selectedImage} alt="Selected" />
                  </div>
              </div>
          )}
          <div class="ow-section-container2">
 
  <div class="ow-theworks-section">
  <div className="ow-fullscreen-image-container2">
         <img src={ggg} alt="Responsive Full Viewport Image" className="ow-fullscreen-image2"></img>
  <div className="ow-form-container">
          <div className="fc-top-half">
            <h1 className="fc-top-half-text">Get a FREE Estimate Today!</h1>
            <p className="fc-top-half-text2">No Cost, zero commitments!</p>
          </div>
          <div className="fc-bottom-half">
            <form onSubmit={handleSubmit} noValidate>
              {isSubmitted ? (
                <div className="fc-thank-you-message">
                  <h2>Thank you for your submission!</h2>
                </div>
              ) : (
                <>
                  <div className="fc-progress-indicator">
                    {questions.map((_, index) => (
                      <React.Fragment key={index}>
                        <div className={`fc-circle ${currentQuestion >= index ? 'active' : ''}`}>
                          {index + 1}
                        </div>
                        {index < questions.length - 1 && (
                          <span className={`fc-hyphen ${currentQuestion >= index ? 'active' : ''}`}></span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  {questions.map((q, index) => (
                    <div
                      className="fc-question"
                      key={index}
                      style={{ display: currentQuestion === index ? 'block' : 'none' }}
                    >
                      <label htmlFor={q.name}>{q.question}</label>
                      {q.type === 'select' ? (
                        <select
                          id={q.name}
                          name={q.name}
                          value={formData[q.name]}
                          onChange={handleInputChange}
                          required
                          className="fc-form-input"
                        >
                          <option value="" disabled>
                            Select city
                          </option>
                          {q.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={q.type}
                          id={q.name}
                          name={q.name}
                          value={formData[q.name]}
                          onChange={handleInputChange}
                          required
                          className="fc-form-input"
                          onInvalid={(e) => {
                            e.target.setCustomValidity(
                              q.type === 'email' ? 'Please fill in your email' : 'This field is required'
                            );
                          }}
                          onInput={(e) => {
                            e.target.setCustomValidity('');
                          }}
                        />
                      )}
                      {currentQuestion === 0 ? (
                        <button className="fc-get-started" type="button" onClick={handleNext}>
                          Get Started
                        </button>
                      ) : (
                        <>
                          {index > 0 && (
                            <button
                              className="fc-form-previous"
                              type="button"
                              onClick={() => setCurrentQuestion(currentQuestion - 1)}
                            >
                              Previous
                            </button>
                          )}
                          {index < questions.length - 1 ? (
                            <button className="fc-form-next" type="button" onClick={handleNext}>
                              Next
                            </button>
                          ) : (
                            <button className="fc-form-submit" type="submit" disabled={isSubmitting}>
                              {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
            </form>
          </div>
          </div>
          <div className='ow-privacy-policy-container'>
      <p class="ow-privacy-policy">* We don’t share your personal info with anyone. Check out our <a href="#">Privacy Policy</a> for more information.</p>
      </div>
     
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
  </div>
 </div>
      </div>
  );
}