import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo and About */}
          <div>
            <h2 className="footer-logo">StyleHub</h2>
            <p className="footer-about">
              Your one-stop destination for trendy fashion and accessories.
              We bring you the latest styles at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-links-title">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="footer-link">
                <a href="#">Terms of Service</a>
              </li>
              <li className="footer-link">
                <a href="#">Shipping Policy</a>
              </li>
              <li className="footer-link">
                <a href="#">Return Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="footer-links-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="social-link">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="social-link">
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} StyleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 