import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './HeroSlider.css';
import { Link } from "react-router-dom";
import circle_img from "/images/circle_img.png";
import circle_text from "/images/circle_text.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";




const slides = [
  {
    id: 1,
    title: 'Timeless <span class="highlight">Elegance,</span> <strong>Crafted</strong> Just for You',
    bgImage: "/images/hero_slider_img01.png",
  },
  {
    id: 2,
    title: 'Up to <span class="highlight">50% Off</span> on <br>All Categories',
    bgImage: "/images/hero_slider_img02.png",
  },
  {
    id: 3,
    title: "New <strong class='black'>Arrivals</strong><br> Dropping Daily",
    bgImage: "/images/hero_slider_img03.png",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='top_hero_slider'>
      

      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 2000 }}
        loop={true}
        speed={1500}
        effect="fade"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero_slide"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className='container'>
                <div className={`hero_content ${activeIndex === index ? 'animate' : ''}`}>
                  <h1 dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                  <Link to="/shop" className="hero-btn">
                    Discover Now
                  </Link>
                </div>

                
                <div className="custom-swiper-navigation">
                  <div className="swiper-button-prev"><GoArrowLeft /></div>
                  <div className="swiper-button-next"><GoArrowRight /></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='container swiper_circle_sec_main'>
        <div className='swiper_circle_sec'>
          <img className='circle_img' src={circle_img} alt='logo' />
          <img className='circle_text' src={circle_text} alt='logo' />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
