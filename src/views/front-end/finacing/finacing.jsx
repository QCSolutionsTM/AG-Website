import React from 'react';
import house2 from '../../../assets/house2.jpg';
import './finacing.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function about () {
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
      <div className="fc-fullscreen-image-container">
        <img src={house2} alt="Responsive Full Viewport Image" className="fc-fullscreen-image" />
        <div className="fc-form-container">
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
      </div>
    );
  }