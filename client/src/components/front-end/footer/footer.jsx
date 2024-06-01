import React from 'react'
import './footer.css'
const footer = () => {
  return (
    
    <footer class="footer-section">
    <div class="footer-content">
        <div class="footer-column">
            <img src="footerimage.png" alt="RoofItAll" class="footer-logo"/>
            <p class="footer-license">License Number: CCB#216439</p>
            <button class="footer-button">Free Estimate</button>
        </div>
        <div class="footer-column">
            <h4 class="footer-title">Explore</h4>
            <ul class="footer-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Financing</a></li>
                <li><a href="#">Service Areas</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h4 class="footer-title">Roof Services</h4>
            <ul class="footer-list">
                <li><a href="#">Roof Repair</a></li>
                <li><a href="#">Roof Replacements</a></li>
                <li><a href="#">Roof Inspections</a></li>
                <li><a href="#">Metal Roofing</a></li>
                <li><a href="#">Shingle Roofing</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h4 class="footer-title">More Services</h4>
            <ul class="footer-list">
                <li><a href="#">Window Installation</a></li>
                <li><a href="#">Gutter Installation</a></li>
                <li><a href="#">Painting Services</a></li>
                <li><a href="#">Siding Replacement</a></li>
                <li><a href="#">Exterior Restoration</a></li>
                <li><a href="#">Building Additions</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h4 class="footer-title">Get In Touch</h4>
            <ul class="footer-contact">
                <li><i class="fa fa-phone"></i> 971-707-7663</li>
                <li><i class="fa fa-clock-o"></i> Mon - Fri 6:00AM-4:00PM</li>
                <li><i class="fa fa-map-marker"></i> Lane County, OR</li>
            </ul>
            <button class="footer-google-button">Click here to leave us a review on Google!</button>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Privacy Policy | Terms of Service © Copyright Absolution Construction | All Rights Reserved.</p>
        <p>Powered by qcsolutions.com</p>
    </div>
</footer>



  )
}

export default footer;