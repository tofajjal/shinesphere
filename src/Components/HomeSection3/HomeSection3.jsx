import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSection3.css';

import box_img3 from "/images/box_img3.png";
import trending_img01 from "/images/trending_img01.png";
import new_arrival01 from "/images/new_arrival01.png";
import new_arrival02 from "/images/new_arrival02.png";
import { BsArrowRightShort } from 'react-icons/bs';

function HomeSection3() {
  return (
    <section className="home-section3">
      <div className="container">
        <div className="left-side">
          <div className="top-box" data-aos="fade-right" data-aos-duration="800">
            <Link to="/shop" className="full-link"></Link>
            <img className="path_to_your_image1" src={new_arrival01} alt="" />
            <div className="text-block">
              <span>New Collection</span>
              <h2>Ardeco pearl<br /> Rings style 2025</h2>
            </div>
          </div>

          <div className="bottom-boxes">
            <div
              className="small-box"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <Link to="/shop" className="full-link"></Link>
              <img className="path_to_your_image2" src={new_arrival02} alt="" />
              <div className="text-block">
                <span>New Arrival</span>
                <h2>Gold Jewelry</h2>
              </div>
            </div>

            <div
              className="small-box small-box2"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <Link to="/shop" className="full-link"></Link>
              <img className="path_to_your_image3" src={trending_img01} alt="" />
              <div className="text-block">
                <span>Trending</span>
                <h2>Tropical Set</h2>
              </div>
            </div>
          </div>
        </div>

        <div
          className="right-side"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="900"
        >
          <img className="path_to_your_image4" src={box_img3} alt="" />
          <div className="text-overlay">
            <span>Collection</span>
            <h2>Diamonds with<br /> Ring gold</h2>
            <Link to="/shop" className="shop-now-btn">
              Shop Now <BsArrowRightShort />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection3;
