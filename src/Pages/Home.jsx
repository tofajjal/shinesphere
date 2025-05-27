import React from 'react';
import HeroSlider from '../Components/HeroSlider/HeroSlider';
import HomeSection2 from "../Components/HomeSection2/HomeSection2";
import HomeSection3 from "../Components/HomeSection3/HomeSection3";
import HomeSection4 from "../Components/HomeSection4/HomeSection4";
import Shop from './Shop'; 
import PartnersSlider from '../Components/PartnersSlider/PartnersSlider';
import NewCollection_NewLook from '../Components/NewCollection_NewLook/NewCollection_NewLook';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <Shop />
      <NewCollection_NewLook />
      <PartnersSlider />
    </div>
  );
};

export default Home;
