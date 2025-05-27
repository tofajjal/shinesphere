import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contact from "../assets/contact.png";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-5 bg-light min-vh-100 d-flex align-items-center contact">
      <div className="container">
        <div className="row g-5">
          {/* Left Side */}
          <div className="col-md-6" data-aos="fade-down">
            <h1 className="mb-3">Get In Touch</h1>
            <p className="mb-4 text-muted">
              We’re here to assist you! Whether you have a question, feedback, or want to collaborate, feel free to reach out.
            </p>

            <div className="mb-4 p-4 bg-white rounded shadow-sm" data-aos="fade-down" data-aos-delay="100">
              <h5 className="mb-2">📍 Office Address</h5>
              <p className="mb-0">123 Modern Ave, Suite 456, New York, NY 10001, USA</p>
            </div>

            <div className="mb-4 p-4 bg-white rounded shadow-sm" data-aos="fade-down" data-aos-delay="200">
              <h5 className="mb-2">📞 Phone</h5>
              <p className="mb-0">Customer Support: +1 (555) 123-4567<br />Sales Inquiry: +1 (555) 123-4567</p>
            </div>

            <div className="mb-4 p-4 bg-white rounded shadow-sm" data-aos="fade-down" data-aos-delay="300">
              <h5 className="mb-2">✉️ Email</h5>
              <p className="mb-0">shinesphere@gmail.com<br />partnershinesphere@gmail.com</p>
            </div>

            <div className="mb-4 p-4 bg-white rounded shadow-sm" data-aos="fade-down" data-aos-delay="400">
              <h5 className="mb-2">⏰ Business Hours</h5>
              <p className="mb-0">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday & Sunday: Closed</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6 d-flex justify-content-center align-items-center" data-aos="fade-down" data-aos-delay="500">
            <img src={contact} alt="contact" className="img-fluid rounded contact-img-shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
