import React from 'react';
import './HomeSection4.css';
import { Link } from 'react-router-dom'; 
import HomeSection4_img from "/images/HomeSection4_img.png";
import { BsArrowRightShort } from 'react-icons/bs';

const HomeSection4 = () => {
  return (
    <div className="container HomeSection4">
      <div className="row align-items-center">
        <div
          className="col-12 col-md-6"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img className='' src={HomeSection4_img} alt='Unity Collection' />
        </div>
        <div
          className="col-12 col-md-6"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className='HomeSection4_right_desc'>
            <span>Unity Collection</span>
            <h2>It is a long established <br /> fact that a reader</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you are
              going to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassin
            </p>
            <Link to="/contact" className="contact_btn">
              Contact Us <BsArrowRightShort />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
