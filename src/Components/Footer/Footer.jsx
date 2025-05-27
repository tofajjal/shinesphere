import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import footer_logo from "../../assets/logo_footer.svg";
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="footer">
      <div className='container' data-aos="fade-down">
        <img src={footer_logo} alt='footer_logo' className="footer-logo" />
      </div>

      <div className="container footer-top">
        <div className="footer-col logo-col" data-aos="fade-down" data-aos-delay="100">
          <p className="footer-question">Got Questions? Call us</p>
          <p>+1 (555) 123-4567</p>
          <p>shinesphere@gmail.com</p>
          <p>123 Modern Ave, Suite 456, New York,<br /> NY 10001, USA</p>
        </div>

        <div className="footer-col" data-aos="fade-down" data-aos-delay="200">
          <h4>Information</h4>
          <ul>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/latest-news">Latest News</Link></li>
          </ul>
        </div>

        <div className="footer-col" data-aos="fade-down" data-aos-delay="300">
          <h4>Help</h4>
          <ul>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col" data-aos="fade-down" data-aos-delay="400">
          <h4>Follow Us On</h4>
          <div className="footer-social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom" data-aos="fade-down" data-aos-delay="500">
        <p>© 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
