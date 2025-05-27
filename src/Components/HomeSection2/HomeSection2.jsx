import React from 'react';
import './HomeSection2.css';

import { MdOutlineLocalShipping } from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { CiDiscount1 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";

const features = [
  {
    icon: <MdOutlineLocalShipping />,
    title: "Free Delivery",
    description: "Orders from all items",
  },
  {
    icon: <HiOutlineReceiptRefund />,
    title: "Return & Refund",
    description: "Money back guarantee",
  },
  {
    icon: <CiDiscount1 />,
    title: "Member Discount",
    description: "On every order over $160.00",
  },
  {
    icon: <BiSupport />,
    title: "Support 24/7",
    description: "Contact us 24 hours a day",
  },
];

const HomeSection2 = () => {
  return (
    <section className="home_section2">
      <div className="container">
        <div className="features_grid">
          {features.map((item, index) => (
            <div
              className="feature_item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100} // delay increases for each item
              data-aos-duration="800"
            >
              <div className="feature_icon">{item.icon}</div>
              <div className="feature_icon_right">
                <h3 className="feature_title">{item.title}</h3>
                <p className="feature_desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
