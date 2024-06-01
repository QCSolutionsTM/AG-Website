import React from 'react';
import house from '../../../assets/house.jpg';
import './services.css';
import satifcation2 from '../../../assets/saa2.png';
import { Link } from 'react-router-dom';
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
import shingles from '../../../assets/shingles.jpg'
import metals from '../../../assets/metal.jpg'
import ggg from '../../../assets/ggg.jpg';
import windows from '../../../assets/windows.jpg';
import trim from '../../../assets/trim.jpg';
import siding from '../../../assets/siding.jpg';
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
         <div className="sv-fullscreen-image-container">
        <img src={house} alt="Responsive Full Viewport Image" className="sv-fullscreen-image"></img>
        <h1 className='sv-services-title'>Our Services</h1>
        <p className='sv-services-text'>Absolutions Construction is Lane Countys Premier Roofing & Restoration Company.
         We specialize in roof repair & replacement, siding, gutters, 
         windows and extensive interior and exterior painting.
          Contact us today for a free inspection.</p>
          <div class="sv-buttons-container">
          <Link to="/views/front-end/finacing">
            <button class="sv-button">Free Estimate<i className="fa-solid fa-caret-right css-styling-carrot-icon"></i></button>

        
            </Link>
        <button class="sv-button2">Call Us: (541)-223-6206</button>
    </div>
        </div>
        <div class="more-services-section2">
        <h2 class="more-services-title2">Roofing Services</h2>
        <div class="more-services-description-container">
        <p class="more-services-description2">
           We offer professional, reliable and afforadable roofing services to wonderful homeowners in the area. No job can challenge our crew and even if it did, we would still get the job done.
        </p>
        </div>
        </div>
        <div class="services-cards-container">
        <div class="service-card">
            
            <img src={image90} alt="Roof Repair" class="service-image"/>
            <div class="service-content">
                <h3 class="service-title">Roof Repair</h3>
                <p class="service-description">
                We understand that a sturdy roof is essential for the safety and comfort of your home. Our expert team specializes in comprehensive roof repair services, addressing everything from minor leaks to significant storm damage. With years of experience and a commitment to quality, we use top-of-the-line materials and advanced techniques to ensure your roof is as resilient as it is aesthetically pleasing. Don't let a damaged roof compromise your home's integrity; trust us to restore its strength and durability, protecting your family and possessions for years to come. Contact us today for a free inspection and let us bring your roof back to peak condition.
                </p>
                <Link to="/views/front-end/finacing">
            <button class="service-button">Free Estimate<i className="fa-solid fa-caret-right css-styling-carrot-icon"></i></button>

        
            </Link>
            </div>
        </div>
        <div class="service-card">
            <img src={image100} alt="Roof Inspections" class="service-image"/>
            <div class="service-content">
                <h3 class="service-title">Roof Inspections</h3>
                <p class="service-description">
                Our expert roof inspection services are designed to identify potential issues before they become costly problems. During our comprehensive inspections, we meticulously examine every aspect of your roof, including shingles, flashing, gutters, vent pipes, and structural components. We look for signs of wear and tear, damage from weather, poor installation, and potential leaks. Our team is well trained and prepared to handle any situation that comes our way. With Absolution Construction & Roofing you will finally not have to worry anymore. Let us bring you a peace of mind while giving the ultimate service that we provide.
                </p>
                <Link to="/views/front-end/finacing">
            <button class="service-button">Free Estimate<i className="fa-solid fa-caret-right css-styling-carrot-icon"></i></button>

        
            </Link>
            </div>
          </div>
          </div>
          <div class="responsive-section">
    <div class="responsive-section-content">
    <div style={{ height: '50px', width: 'auto' }}>
              <img src={satifcation2} alt="Logo" className="image-saa" />
            </div>
      
        <div class="responsive-section-text">
            <h2>Contact Us to Book a FREE Roof Inspection & Estimate!</h2>
            <p className="text-text-text">
                Absolution Construction & Roofing would be happy to schedule a free roof inspection for your home or business in <strong>Lane County</strong> and surrounding areas. To book a time that is convenient for you, please reach out to us today. Our local roof repair contractors can answer any questions and give you the knowledgeable, friendly service you want!
            </p>
            <div class="responsive-section-buttons">
            <Link to="/views/front-end/finacing">
            <button class="btn-free-estimate">Free Estimate<i className="fa-solid fa-caret-right css-styling-carrot-icon"></i></button>

        
            </Link>
                <button class="btn-call-us">Call Us Today</button>
            </div>
        </div>
        </div></div>
        <div class="more-services-section2">
      
        </div>
        <div class="services-cards-container">
        <div class="service-card">
            
            <img src={shingles} alt="Roof Repair" class="service-image"/>
            <div class="service-content">
                <h3 class="service-title">Shingle Roofs</h3>
                <p class="service-description">
                Shingle roofs are a popular and versatile choice for homeowners seeking durability, aesthetic appeal, and cost-effectiveness. At [Your Company Name], we specialize in the installation, repair, and maintenance of high-quality shingle roofs. Available in a variety of materials, including asphalt, wood, and composite, shingle roofs offer a wide range of styles and colors to complement any home's architecture. Known for their resilience against harsh weather conditions, shingle roofs provide excellent protection and can last for decades with proper care. Our expert team is dedicated to ensuring that your shingle roof not only enhances your home's curb appeal but also delivers superior performance and longevity.  </p>
               
            </div>
        </div>
        <div class="service-card">
            <img src={metals} alt="Roof Inspections" class="service-image"/>
            <div class="service-content">
                <h3 class="service-title">Metal Roofs</h3>
                <p class="service-description">
                Metal roofs are an excellent choice for homeowners looking for durability, energy efficiency, and a modern aesthetic. Beyond their durability, metal roofs are energy efficient, reflecting solar heat to keep your home cooler in the summer and reducing energy costs. They are also environmentally friendly, often made from recycled materials and fully recyclable at the end of their lifespan. Whether you’re considering a metal roof for its modern appeal, its resilience, or its energy-saving benefits.Contact us today to learn more about the advantages of metal roofing and to schedule a consultation with our experienced team.
                </p>
            
            </div>
          </div>
          </div>



          
        
    <div class="more-services-section">
    <h2 class="more-services-title2">More Services</h2>
        <div class="more-services-description-container">
        <p class="more-services-description2">
            We Offer professional siding, gutter, and more construction services to our clients, and we also do painting and window replacement work. No job can challenge our crew.
        </p>
        </div>
        <div class="more-services-card">
            <div class="more-services-content">
                <h3 class="more-services-card-title">Window Installation</h3>
                <p class="more-services-card-description">
                    We take great pride in our craftsmanship and replace all windows and doors using the same precision, detail, and care we would on our own homes. Quality window and door replacement is one of our core goals. In a world where integrity is always at question, we are committed to our moral principal and providing you with a company you can trust. When you choose Roof It All for your Windows’s, you’re choosing the best.
                </p>
                <button class="more-services-button">Free Estimate</button>
            </div>
            <img src={windows} alt="Window Installation" class="more-services-image"/>
        </div>
    </div>
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
            </div></div>
            </div>
            </div>
            <div class="service-section3">
        <div class="service-card3">
            <img src={siding} alt="Siding Replacement"/>
            <h2>Siding Replacement</h2>
            <p>Roof It All is one of the top leading providers of residential siding replacement services in the Canby area. Specializing in the renovation and repair of home exteriors, we are uniquely qualified for projects such as installation of James Hardie fiber cement siding, soffit and fascia, impact windows and gutters.</p>
        </div>
        <div class="service-card3">
            <img src={image67} alt="Exterior Restoration"/>
            <h2>Exterior Restoration</h2>
            <p>When a home or commercial property needs to be restored, we’ll be there for you. With over 20 years of combined experience, our teams of restoration specialists can manage every aspect of your property repairs. Whether you just need simple repairs made quickly or your home requires a full restoration, we can manage that process for you.</p>
        </div>
        <div class="service-card3">
            <img src={trim} alt="Trim Work"/>
            <h2>Trim Work</h2>
            <p>Roof It All offers our customers numerous moulding choices. We can provide you or your contractor with a variety of moulding and trim materials ranging from traditional wood to urethane and flexible moulding solutions. We can help with Interior and Exterior Trim applications.</p>
        </div>
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
    )
}