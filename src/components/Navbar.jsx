import { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className={`navbar-logo ${isScrolled ? 'scrolled' : ''}`}>
            StyleHub
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className={`navbar-link ${isScrolled ? 'scrolled' : ''}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="navbar-cart-button">
            <button className={`navbar-icon-button ${isScrolled ? 'scrolled' : ''}`}>
              <FaShoppingCart className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-button">
            <button
              onClick={toggleMenu}
              className={`navbar-icon-button ${isScrolled ? 'scrolled' : ''}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`navbar-mobile-menu ${isMenuOpen ? 'visible' : 'hidden'}`}>
        <div className="navbar-mobile-links">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="navbar-mobile-link"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 