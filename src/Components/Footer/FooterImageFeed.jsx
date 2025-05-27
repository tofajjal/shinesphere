import React, { useEffect } from "react";
import "./FooterImageFeed.css";
import image_feed01 from "../../assets/image_feed01.png"
import image_feed02 from "../../assets/image_feed02.png"
import image_feed03 from "../../assets/image_feed03.png"
import image_feed04 from "../../assets/image_feed04.png"
import image_feed05 from "../../assets/image_feed05.png"


const FooterImageFeed = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeContent = document.querySelector(".marquee-content");
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");

    if (marqueeContent) {
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);

      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <div className="marquee">
        <div className="container text-center">
            <h2 data-aos="fade-left" data-aos-duration="2000">Fresh Takes from Our<br></br> Image Feed</h2>
            <p data-aos="fade-right" data-aos-duration="2000">Discover the creative direction shaping today’s most engaging digital storefronts.</p>
        </div>
      <ul className="marquee-content">
        {/* Replace numbers with images */}
        <li><img src={image_feed01} alt='image_feed01'/></li>
        <li><img src={image_feed02} alt='image_feed02'/></li>
        <li><img src={image_feed03} alt='image_feed03'/></li>
        <li><img src={image_feed04} alt='image_feed04'/></li>
        <li><img src={image_feed05} alt='image_feed05'/></li>
      </ul>
    </div>
  );
};

export default FooterImageFeed;
