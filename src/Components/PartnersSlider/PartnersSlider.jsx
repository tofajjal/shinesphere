import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import 'swiper/css';
import 'swiper/css/navigation';
import './PartnersSlider.css';

const PartnersSlider = () => {
  return (
    <div className="container">
      <div className="logo-slider-wrapper">
        {/* Navigation arrows */}
        <div className="custom-swiper-prev"><GrLinkPrevious size={24} /></div>
        <div className="custom-swiper-next"><GrLinkNext size={24} /></div>

        {/* OUTER container for Swiper */}
        <div className="swiper-container">
        <Swiper
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={15}
          loop={true}
          navigation={{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
>

            {/* Slides */}
            <SwiperSlide><img data-aos="fade-up" src="/images/logo_01.png" alt="Logo 1" /></SwiperSlide>
            <SwiperSlide><img data-aos="fade-up" data-aos-delay="600" src="/images/logo_02.png" alt="Logo 2" /></SwiperSlide>
            <SwiperSlide><img data-aos="fade-up" data-aos-delay="700" src="/images/logo_03.png" alt="Logo 3" /></SwiperSlide>
            <SwiperSlide><img data-aos="fade-up" data-aos-delay="800" src="/images/logo_04.png" alt="Logo 4" /></SwiperSlide>
            <SwiperSlide><img data-aos="fade-up" data-aos-delay="900" src="/images/logo_05.png" alt="Logo 5" /></SwiperSlide>
            <SwiperSlide><img data-aos="fade-up" data-aos-delay="1000" src="/images/logo_01.png" alt="Logo 6" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PartnersSlider;
