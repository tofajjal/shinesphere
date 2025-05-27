import React, { useEffect, useRef, useState } from 'react';
import './HappyCustomerSection.css';

const useCountUp = (trigger, target) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setValue(0); // Reset when not visible
      return;
    }

    let current = 0;
    const duration = 1000; // 1 second
    const stepTime = 20;   // faster step time
    const steps = duration / stepTime;
    const increment = target / steps;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.round(current));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [trigger, target]);

  return value;
};

const HappyCustomerSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true); // Trigger the counter
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const count1 = useCountUp(isVisible, 94);
  const count2 = useCountUp(isVisible, 91);
  const count3 = useCountUp(isVisible, 93);

  return (
    <div className='HappyCustomerSection' ref={sectionRef}>
      <div className='container'>
        <img data-aos="fade-down" data-aos-duration="2500" src="/images/logo_icon_b.svg" alt="logo" />
        <h5 data-aos="fade-right" data-aos-duration="1000">The Shine Sphere</h5>
        <h2 data-aos="fade-left" data-aos-duration="1000">
          Join 1,000+ happy customers<br />
          wearing our artisan-crafted designs
        </h2>
        <div className='row'>
          <div className='col-md-4 px-4'>
          <div className="pulse-wrapper">
          <div className="pulse-circle"></div>
            <h3 className='count'>{count1}%</h3>
            </div>
            <p>
              of customers noticed a significant boost in compliments while
              wearing our handcrafted jewelry
            </p>
          </div>
          <div className='col-md-4 px-4'>
          <div className="pulse-wrapper">
          <div className="pulse-circle"></div>
            <h3 className='count'>{count2}%</h3>
            </div>
            <p>
              of customers said our designs felt more unique and meaningful than
              mass-produced pieces
            </p>
          </div>
          <div className='col-md-4 px-4'>
          <div className="pulse-wrapper">
          <div className="pulse-circle"></div>
            <h3 className='count'>{count3}%</h3>
            </div>
            <p>
              of customers reported a deeply satisfying experience owning and
              wearing our artisan-crafted jewelry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomerSection;

