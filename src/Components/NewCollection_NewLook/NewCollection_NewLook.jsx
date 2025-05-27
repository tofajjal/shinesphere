import React from 'react';
import './NewCollection_NewLook.css';
import NCWNL from "/images/NCWNL.png";
import nl_right from "/images/nl_right.png";
import { Link } from 'react-router-dom';

const NewCollection_NewLook = () => {
  return (
    <div className='container'>
      <div
        className='new_collection_new_look'
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <div className='row align-items-center text-center new_look_left'>
          <div
            className='col-12 col-md-6'
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <img className='img-fluid img_left' src={NCWNL} alt='' />
          </div>
          <div
            className='col-12 col-md-6 new_look_right_con'
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h2 className="stroke_font">Collection</h2>
            <p>BUILD YOUR OWN SETS</p>
            <img className='build_your_own_sets' src={nl_right} alt='' />
            <h3>Our finest jewelry</h3>
            <Link to="/shop" className='shop_collection'>Shop this collection</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection_NewLook;
