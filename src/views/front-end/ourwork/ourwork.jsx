import React from 'react';
import house from '../../../assets/house.jpg';
import { useState } from 'react';
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

    return (
      <div className='mt-4'>
        <div className='containerimg'>
            <div className="gallery">
                
            <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>
          <div className="gallery__item" onClick={() => openModal(house)}>
            <img src={house} alt="house" className="gallery__img"/>
            <div className="gallery__icon">+</div>
          </div>     
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
    </div>
    )
}