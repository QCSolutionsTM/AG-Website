import React from 'react'
import house from '../../../assets/house.jpg';
import { useState } from 'react';
import './service-area.css';
import satifcation from '../../../assets/saa.png';
import satifcation2 from '../../../assets/saa2.png';
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
import { Link } from 'react-router-dom';
export default function servicearea() {
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
  return (
    <div>
       <div>
      <div className="sa-fullscreen-image-container">
        <img src={house} alt="Responsive Full Viewport Image" className="sa-fullscreen-image"></img>
        <div class="sa-overlay-text">
            <h1 class="sa-title">Local Construction Company Serving Lane County & Beyond</h1>
            <p class="sa-subtitle">Absolution Constructing & Roofing is a proud to be a respected member of the roofing community in Lane County and surrounding areas.
             We are headquartered in Eugene, OR. Communities we serve include:</p>
            <ul class="sa-city-list">
                <li className='sa-city-list-item1'><i class="fa fa-map-marker"></i> Eugene</li>
                <li className='sa-city-list-item2'><i class="fa fa-map-marker"></i> Springfield</li>
                <li className='sa-city-list-item3'><i class="fa fa-map-marker"></i> Portland</li>
                <li className='sa-city-list-item4'><i class="fa fa-map-marker"></i> Salem</li>
                <li className='sa-city-list-item5'><i class="fa fa-map-marker"></i> Silverton</li>
                <li className='sa-city-list-item6'><i class="fa fa-map-marker"></i> Halsey</li>
                <li className='sa-city-list-item7'><i class="fa fa-map-marker"></i> Veneta</li>
                <li className='sa-city-list-item8'><i class="fa fa-map-marker"></i> Hillsboro</li>
                <li className='sa-city-list-item9'><i class="fa fa-map-marker"></i> Silverton</li>
                <li className='sa-city-list-item10'><i class="fa fa-map-marker"></i> And More</li>
            </ul>
        </div>
        </div>
        <div className='sa-city-title-main2'>
          <p className='sa-city-title-undertext2'>Absolute Contracting & Roofing is a full-service roofing and exterior renovations contractor. Our professional services include roof repair and replacement, siding, gutters, windows, 
          and interior and exterior painting. High quality is our mission for the cheapest price possible.</p>
        </div>
        <div className='sa-city-title'>
          <h1 className='sa-city-title-titletext'>About our construction & roofing Services</h1>
          </div>
          <div className='sa-city-title-main'>
          <p className='sa-city-title-undertext'>We offer free roof inspections and estimates for both residential and commercial customers. If you are in the area and you need skilled roof repair, 
          installation or maintenance services, we our the best people for the job.</p>
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
       <div className='ct-bottom-screen2'>
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
