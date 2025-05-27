import React from 'react';

const Faqs = () => {
  const faqList = [
    {
      question: 'Are all your jewellery pieces handmade?',
      answer: 'Yes, every piece is meticulously handcrafted by skilled artisans using traditional techniques and high-quality materials.',
    },
    {
      question: 'What materials do you use in your jewellery?',
      answer: 'We use a variety of premium materials including sterling silver, 14K/18K gold, semi-precious stones, beads, and ethically sourced crystals.',
    },
    {
      question: 'Is each piece unique?',
      answer: 'Absolutely! Since every item is handmade, no two pieces are exactly the same. Small variations make each design one-of-a-kind.',
    },
    {
      question: 'How should I care for my handcrafted jewellery?',
      answer: (
        <>
          To preserve its beauty:
          <ul>
            <li>Store it in a dry, soft pouch.</li>
            <li>Avoid contact with water, perfumes, or harsh chemicals.</li>
            <li>Gently wipe with a soft cloth after use.</li>
          </ul>
        </>
      ),
    },
    {
      question: 'Do you offer custom or personalized designs?',
      answer: 'Yes! We love custom orders. Please contact us with your idea, and we’ll work with you to create a unique piece tailored to your preferences.',
    },
    {
      question: 'What is your return and exchange policy?',
      answer: 'We accept returns or exchanges within 14 days of delivery for unworn items. Custom or personalized items are non-refundable unless there’s a defect.',
    },
    {
      question: 'How long does it take to ship an order?',
      answer: 'Our handmade items typically ship within 3–5 business days. Custom orders may take longer — we\'ll keep you informed throughout the process.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we offer worldwide shipping. Delivery times and costs vary by country and will be calculated at checkout.',
    },
    {
      question: 'Is your packaging eco-friendly?',
      answer: 'Yes! We use recycled and recyclable materials for all our packaging. Each order is gift-ready and securely packed.',
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="main_page_title">FAQs</h1>
      <div className="faq_section">
        {faqList.map((faq, index) => (
          <div key={index} className="faq_item">
            <h3 className="faq_question">{index + 1}. {faq.question}</h3>
            <p className="faq_answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
