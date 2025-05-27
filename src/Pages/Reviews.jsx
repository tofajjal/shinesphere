import React from 'react';

const reviews = [
  {
    name: 'Emily R.',
    rating: 5,
    text: 'Absolutely stunning craftsmanship. The earrings I ordered were even more beautiful in person!',
    date: 'March 22, 2025'
  },
  {
    name: 'Daniel K.',
    rating: 4,
    text: 'Loved the ring. It arrived quickly and looks amazing. Great for gifting!',
    date: 'April 3, 2025'
  },
  {
    name: 'Sophie L.',
    rating: 5,
    text: 'The necklace is delicate and beautiful. You can tell it was made with care. I’m in love!',
    date: 'February 14, 2025'
  },
  {
    name: 'Michael B.',
    rating: 4,
    text: 'Bought a bracelet for my wife. She hasn’t taken it off since. The packaging was lovely too.',
    date: 'January 28, 2025'
  },
  {
    name: 'Ava M.',
    rating: 5,
    text: 'This is my third order! The earrings are my go-to accessory now. Excellent quality!',
    date: 'March 10, 2025'
  },
  {
    name: 'Rachel Z.',
    rating: 3,
    text: 'The ring is beautiful but the size runs a bit small. Still very happy with the detail.',
    date: 'February 2, 2025'
  },
  {
    name: 'Olivia W.',
    rating: 5,
    text: 'Handcrafted perfection! Got so many compliments at the wedding I attended.',
    date: 'April 1, 2025'
  },
  {
    name: 'Lucas D.',
    rating: 4,
    text: 'Very elegant and unique. Shipping took a little longer but worth the wait.',
    date: 'March 5, 2025'
  }
  
];

const StarRating = ({ rating }) => {
  return (
    <div className="stars">
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="container reviews-page" data-aos="fade-down">
      <h1 className="reviews-title">Customer Reviews</h1>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index} data-aos="fade-down"
                  data-aos-delay={index * 100}>
            <StarRating rating={review.rating} />
            <p className="review-text">"{review.text}"</p>
            <p className="review-author">– {review.name}</p>
            <p className="review-date">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
