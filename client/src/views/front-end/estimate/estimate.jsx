
import house from '../../../assets/house.jpg'
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function estimate () {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [formData, setFormData] = useState({
        city: '',
        name: '',
        number: '',
        email: '', // Add this line
      
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const questions = [
        { question: "Select your City", type: "text", name: "city" },
        { question: "Name", type: "text", name: "name" },
        { question: "Phone Number", type: "text", name: "number" },
        { question: "What is your email?", type: "email", name: "email" } // Add this line
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleNext = () => {
      // Get the current question
      const currentQuestionName = questions[currentQuestion].name;
    
      // Check if the current question's answer is filled out
      if (formData[currentQuestionName]) {
        // If it is, increment currentQuestion
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // If it's not, show an error message
        alert('Please fill out this field before moving forward.');
      }
    };



    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:3000/send-email', formData);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };


    return (
        <div className='op mt-3'>
            <div className='es-image-container'>
                <img src={house} alt="evan is gay"></img>
                <div className="form-container">
          <div className="top-half">
            <h1 className='top-half-text'>Get a FREE Estimate Today!</h1>
            <p className='top-half-text2'>No Cost, zero commitments!</p>
          </div>
          <div className="bottom-half">
            <form onSubmit={handleSubmit} noValidate>
                {isSubmitted ? (
                    <div className="thank-you-message">
                        <h2>Thank you for your submission!</h2>
                    </div>
                ) : (
                    <>
            <div className="progress-indicator">
  {questions.map((_, index) => (
    <React.Fragment key={index}>
      <div className={`circle ${currentQuestion >= index ? 'active' : ''}`}>
        {index + 1}
      </div>
      {index < questions.length - 1 && (
        <span className={`hyphen ${currentQuestion >= index ? 'active' : ''}`}></span>
      )}
    </React.Fragment>
  ))}
</div>
{questions.map((q, index) => (
  <div
    className="question"
    key={index}
    style={{ display: currentQuestion === index ? 'block' : 'none' }}
  >
    <label htmlFor={q.name}>{q.question}</label>
    <input
      type={q.type}
      id={q.name}
      name={q.name}
      value={formData[q.name]}
      onChange={handleInputChange}
      required
    />
    {index > 0 && (
      <button className="form-previous" type="button" onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</button>
    )}
    {index < questions.length - 1 ? (
      <button className="form-next" type="button" onClick={handleNext}>Next</button>
    ) : (
      <button type="submit">Submit</button>
    )}
  </div>
))}
                    </>
                )}
            </form>
           <p className="policy-text"> * We don’t share your personal info with anyone.
Check out our Privacy Policy for more information.</p>
        </div>
    </div>
            </div>
        </div>
    )


}