import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect} from 'react';
import navigationData from './MainNavigation.json';
import './MainNavigation.css';
import { useSelector } from 'react-redux';
import logoimage from '../../../assets/unnamed3.png';
const MainNavigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const openMenu = (index) => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(index);
  };

  const handleProfileClick = () => {
    // Redirect to the client dashboard
    window.location.href = '/views/front-end/ClientRender/dashboard?tab=profile'; // Replace '/client-dashboard' with the actual URL of the client dashboard
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // Adjust this delay as needed
  };



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { // Replace 768 with your threshold
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(currentUser);
  return (
    <div>
    <nav role="navigation" aria-label="Main" className="css-styling-nav-top">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white font-bold text-lg" aria-label="Home">
            <div style={{ height: '50px', width: 'auto' }}>
              <img src={logoimage} alt="Logo" className="css-styling-nav-1" />
            </div>
          </Link>
        </div>
        
       
        <ul className="css-styling-nav-2" role="menubar">
          {navigationData.links.map((link, index) => (
            <li key={index} className="relative" role="none">
              {link.dropdown ? (
                <div
                  className={`relative ${activeMenu === index ? 'active' : ''}`}
                  onMouseEnter={() => openMenu(index)}
                  onMouseLeave={closeMenu}
                  role="menuitem"
                >
                  <button
                    className={`text-white focus:outline-none ${activeMenu === index ? 'hover:text-gray-300 active' : 'hover:text-gray-300'}`}
                    aria-haspopup="true"
                    aria-expanded={activeMenu === index ? 'true' : 'false'}
                    aria-label={link.text}
                  >
                    {link.text}
                  </button>
                  {activeMenu === index && (
                    <div
                      className="css-styling-nav-dropdown-1"
                      onMouseEnter={() => clearTimeout(timeoutRef.current)}
                      onMouseLeave={closeMenu}
                      role="menu"
                    >
                      {link.dropdownItems.map((item, subIndex) => (
                        <div key={subIndex}>
                          <a
                            href={item.url}
                            className="css-styling-nav-dropdown-text"
                            role="menuitem"
                          >
                            {item.text.includes(' ') ? (
                              <span>{item.text.replace(' ', '\u00A0')}</span>
                            ) : (
                              item.text
                            )}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.url}
                  className={`text-white hover:text-gray-300 ${activeMenu === index ? 'active' : ''}`}
                  aria-label={link.text}
                  onMouseEnter={() => openMenu(index)}
                  onMouseLeave={closeMenu}
                >
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="ml-2" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button
          
            className="css-styling-nav-button-1"
            aria-label="Your Button"
          >
             <i className="fa-solid fa-phone css-styling-phone-icon"></i><p className='phone-number'>541-223-6206</p>
          </button>
          <button
  
            className="css-styling-nav-button-2"
            aria-label="Your Button"
          >
             <Link to="/views/front-end/finacing">
            <p className='free-estimate'>Free Estimate<i className="fa-solid fa-caret-right css-styling-carrot-icon"></i></p>
            </Link>
          </button>
          <div className='mobile-menu' onClick={toggleMenu}>
          {isOpen ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}

         </div>
         {isOpen && (
        <div className="mobile-nav">
           <div className="mobile-nav">
          <a href="#" className="mobile-nav-link-1">Home</a>
          <a href="#" className="mobile-nav-link-1">About</a>
          <a href="#" className="mobile-nav-link-1">Services</a>
          <a href="#" className="mobile-nav-link-1">Our Work</a>
          <a href="#" className="mobile-nav-link-1">Finacing</a>
          <a href="#" className="mobile-nav-link-1">Service Areas</a>
          <a href="#" className="mobile-nav-link-1">Contact Us</a>
          <a href="#" className="mobile-nav-link-1">Reviews</a>
          <button
            onClick={handleButtonClick}
            className="mobile-styling-nav-button-2"
            aria-label="Your Button"
          >
            <p className='free-estimate'>Free Estimate<i className="fa-solid fa-caret-right css-styling-carrot-icon"></i></p>
            </button>
          {/* ... add more links as needed ... */}
        </div>
            
        </div>
      )}
          {currentUser ? (
            <div className="profile-container">
              <a onClick={handleProfileClick}></a>
              <div className="user-details">
                <span className="username">{currentUser.username}</span>
                <span className="email">{currentUser.email}</span>
                <span className='email'><a onClick={handleProfileClick}>Chicken</a></span>
                <span className='linkto2'><a onClick={handleProfileClick}>Sign out</a></span>
              </div>
            </div>
          ) : (
            <button
              onClick={handleButtonClick}
              className="css-styling-nav-button-2"
              aria-label="Your Button"
            >
              CM Login
            </button>
          )}
        </div>
      </div>
    </nav>
  </div>
);
};

export default MainNavigation;