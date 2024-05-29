import React from 'react'
import house from '../../../assets/house.jpg';
import './service-area.css';
export default function servicearea() {
  return (
    <div>
       <div>
      <div className="sa-fullscreen-image-container">
        <img src={house} alt="Responsive Full Viewport Image" className="sa-fullscreen-image"></img>
        <div class="sa-overlay-text">
            <h1 class="sa-title">Your Title Here</h1>
            <p class="sa-subtitle">Your subtitle text goes here</p>
            <ul class="sa-city-list">
                <li>City 1</li>
                <li>City 2</li>
                <li>City 3</li>
                <li>City 4</li>
                <li>City 5</li>
                <li>City 6</li>
                <li>City 7</li>
                <li>City 8</li>
                <li>City 9</li>
                <li>City 10</li>
            </ul>
        </div>
    </div>
        </div>
        </div>

  )
}
