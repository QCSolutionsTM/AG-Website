import React from 'react';
import house from '../../../assets/house.jpg';
import './services.css';
export default function about () {

    return (
        <div className='mt-3'>
         <div className="sv-fullscreen-image-container">
        <img src={house} alt="Responsive Full Viewport Image" className="sv-fullscreen-image"></img>
        <h1 className='sv-services-title'>Our Services</h1>
        <p className='sv-services-text'>Roof It All is the Willamette Valley’s Premier Roofing & Restoration Company.
         We specialize in roof repair & replacement, siding, gutters, 
         windows and doors and extensive interior and exterior painting.
          Contact us today for a free inspection.</p>
          <div class="sv-buttons-container">
        <button class="sv-button">Free Estimate</button>
        <button class="sv-button">Call Us: (123) 456-7890</button>
    </div>
        </div>
        <div class="services-cards-container">
        <div class="service-card">
            <img src="roof-repair.jpg" alt="Roof Repair" class="service-image"/>
            <div class="service-content">
                <h3 class="service-title">Roof Repair</h3>
                <p class="service-description">
                    After a storm, it's important to get roofing repairs done quickly to help protect your home from further damage. With hurricane season upon us, we want you to be prepared in the event that your home gets damaged. Roof It All's offers emergency hurricane damage repairs. Our team of expert roofing contractors are committed to getting to you as quickly as possible & getting the job done right, on time, & on budget.
                </p>
                <button class="service-button">Free Estimate</button>
            </div>
        </div>
        <div class="service-card">
            <img src="roof-inspection.jpg" alt="Roof Inspections" class="service-image"/>
            <div class="service-content">
                <h3 class="service-title">Roof Inspections</h3>
                <p class="service-description">
                    Moss, weather damage, missing shingles. Is your roof in need of a replacement or repair? Let the experts at Roof It All conduct a comprehensive inspection on your home or business’s roof to ensure its structural and protective integrity.
                </p>
                <button class="service-button">Free Estimate</button>
            </div>
          </div>
          </div>
        
    <div class="more-services-section">
        <h2 class="more-services-title">More Services</h2>
        <p class="more-services-description">
            Offer professional siding, gutter, and roof repair & construction services to our clients, and we also do painting and window replacement work. No job can challenge our crew.
        </p>
        <div class="more-services-card">
            <div class="more-services-content">
                <h3 class="more-services-card-title">Window Installation</h3>
                <p class="more-services-card-description">
                    We take great pride in our craftsmanship and replace all windows and doors using the same precision, detail, and care we would on our own homes. Quality window and door replacement is one of our core goals. In a world where integrity is always at question, we are committed to our moral principal and providing you with a company you can trust. When you choose Roof It All for your Windows’s, you’re choosing the best.
                </p>
                <button class="more-services-button">Free Estimate</button>
            </div>
            <img src="anotherwebsiteimage.png" alt="Window Installation" class="more-services-image"/>
        </div>
    </div>
  
        </div>
    )
}