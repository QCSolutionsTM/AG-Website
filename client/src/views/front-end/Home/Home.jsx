import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import '../../../views/front-end/Home/Home.css';
import house from '../../../assets/house.jpg';
import on from '../../../assets/on.png';
import on2 from '../../../assets/on2.png';
import on3 from '../../../assets/on3.png';
import painting from '../../../assets/painting.png';
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
import image94 from '../../../assets/website-ag/image94.jpg'
import demo from '../../../assets/siding2.jpg'
import siding2 from '../../../assets/siding2.jpg'
import house3 from '../../../assets/house3.jpg'
import image111 from '../../../assets/website-ag/image111.jpg'
import shingles from '../../../assets/shingles.jpg'
import metals from '../../../assets/metal.jpg'
import ggg from '../../../assets/ggg.jpg';
import please from '../../../assets/pleasee.jpg';
import trim from '../../../assets/trim.jpg';
import siding from '../../../assets/siding.jpg';
import painter2 from '../../../assets/painter2.jpg';

export default function Home() { 
  const [currentQuestion, setCurrentQuestion] = useState(0);
    const [formData, setFormData] = useState({
        city: '',
        name: '',
        number: '',
        email: '', // Add this line
      
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const questions = [
         { question: "Whats your City?", type: "select", name: "city", options: ['Eugene/Springfield', 'Salem', 'Beaverton', 'Eagle Creek', 'Silverton', 'Hillsboro', 'Albany', 'Other' ] },
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

  useEffect(() => {
      if (isSubmitted) {
          console.log('Form has been submitted');
      }
  }, [isSubmitted]);

  const services = [
    {
      title: "Window Installations",
      image: please, // Replace with actual image paths
      link: "#"
    },
    {
      title: "Painting Services",
      image: painter2,
      link: "#"
    },
    {
      title: "Demo & Rebuilds",
      image: demo,
      link: "#"
    },
    {
      title: "Exterior Restoration",
      image: image94,
      link: "#"
    },
    {
      title: "Siding Work",
      image: siding2,
      link: "#"
    },
    {
      title: "Other Services",
      image: house3,
      link: "#"
    }
  ];
  return (
    <div>
      <div className="fullscreen-image-container">
        <img src={house} alt="Responsive Full Viewport Image" className="fullscreen-image"></img>
        
        <div className="home-intro-text">
          <p className="home-intro-text-1">Lane County, Oregon's</p>
          <p className="home-intro-text-2">Premier Roofing &</p>
          <p className="home-intro-text-3">Construction Company</p>
        </div>
        <div className="home-pargraph-text">
        <p className="home-pargraph-text-4">Serving homeowners and businesses in Lane County Oregon and</p>
        <p className="home-pargraph-text-5">the sorrounding areas. We bring quality serves with quick turn arounds</p>
        <p className="home-pargraph-text-6">and affordable pricing. Our team is dedicated to providing the best</p>
        <p className="home-pargraph-text-7">service and quality workmanship to our customers.</p>
        </div>
        <div className="form-container">
                    <div className="top-half">
                        <h1 className="top-half-text">Get a FREE Estimate Today!</h1>
                        <p className="top-half-text2">No Cost, zero commitments!</p>
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
                                            {q.type === 'select' ? (
                                                <select
                                                    id={q.name}
                                                    name={q.name}
                                                    value={formData[q.name]}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="form-input"
                                                >
                                                    <option value="" disabled>Select city</option>
                                                    {q.options.map(option => (
                                                        <option key={option} value={option}>{option}</option>
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
                                                    className="form-input"
                                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                                    onInvalid={(e) => {
                                                        e.target.setCustomValidity(q.type === 'email' ? "Please fill in your email" : "This field is required");
                                                        e.target.setCustomValidity('Please enter a valid email address.');

                                                    }}
                                                    onInput={(e) => {
                                                        e.target.setCustomValidity("");
                                                    }}
                                                />
                                            )}

                                            {currentQuestion === 0 ? (
                                                <button className="get-started" type="button" onClick={handleNext}>Get Started</button>
                                            ) : (
                                                <>
                                                    {index > 0 && (
                                                        <button className="form-previous" type="button" onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</button>
                                                    )}
                                                    {index < questions.length - 1 ? (
                                                        <button className="form-next" type="button" onClick={handleNext}>Next</button>
                                                    ) : (
                                                        <button className="form-submit" type="submit">Submit</button>
                                                    )}
                                                </>
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
    <div className="roofing-services">
  <h2>Roofing Services:</h2>
  <p>We offer professional Roofing Services from replacing your new shingles to handling complete re-roofing projects; we do it all.</p>
  <div className="box-containerqq">
    {services.map((service, index) => (
      <div 
        key={index} 
        className="boxqq" 
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <h3 className="service4-title">{service.title}</h3>
        <a href="#more-info" className="learn-more-btn">Learn More</a> {/* Add this line */}
      </div>
    ))}
  </div>
    </div>



    <section className='hs-section2'>
      <div className="hs-section2-container">
        <div className="hs-section2-container-upperbox">
        <div className="hs-section2-container-upperbox-heading">
          <h1 className="hs-section2-container-upperbox-heading-text">Rated Top Roofer in Portland & Surrounding Areas</h1>
          <p className="hs-section2-container-upperbox-heading-pargraph">Roof It All always uses quality materials and the highest quality craftsmanship in Willamette Valley. 
          Over the years, 
          we have established ourselves as one of the top-rated roofing contractors in our community.</p>
          </div>
            <div className="hs-section2-container-upperbox-image">
                <img src={on} alt="Responsive Full Viewport Image" className="hs-section2-container-upperbox-image1"></img>
                <img src={on2} alt="Responsive Full Viewport Image" className="hs-section2-container-upperbox-image2"></img>
                <img src={on3} alt="Responsive Full Viewport Image" className="hs-section2-container-upperbox-image3"></img>
                </div>
        </div>
        <div className="section22">
      <div className="row22">
        <div className="box hs-section2-container-upperbox-image1"></div>
        <div className="box hs-section2-container-upperbox-image2"></div>
        <div className="box hs-section2-container-upperbox-image3"></div>
      </div>
      <div className="row22">
        <div className="box hs-section2-container-upperbox-image1"></div>
        <div className="box hs-section2-container-upperbox-image2"></div>
      </div>
    </div>
    <div className="section33">
      <div className="row33">
        <div className="box hs-section2-container-upperbox-image1"></div>
        <div className="box hs-section2-container-upperbox-image2"></div>
        <div className="box hs-section2-container-upperbox-image3"></div>
      </div>
      <div className="row33">
        <div className="box hs-section2-container-upperbox-image1"></div>
        <div className="box hs-section2-container-upperbox-image2"></div>
        <div className="box hs-section2-container-upperbox-image2"></div>
      </div>
    </div>
      </div>
    </section>
    </div>
  );
}

