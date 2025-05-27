import React, { useEffect } from 'react';
import './TraditionSection.css';
import { BsArrowRightShort } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const TraditionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='TraditionSection'>
      <div className='container'>
        <h2 data-aos="fade-right" data-aos-duration="1000">We are one with tradition</h2>
        <p data-aos="fade-left" data-aos-duration="1500">
          Worn for generations before us, the beauty of handcrafted jewelry
          is timeless and undeniable.
        </p>
        <a className='shop-now-btn' href='/shop' data-aos="zoom-in" data-aos-delay="200">
          DISCOVER <BsArrowRightShort />
        </a>
      </div>
    </div>
  );
};

export default TraditionSection;
