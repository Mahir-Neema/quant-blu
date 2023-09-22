import React from 'react';
import './FAQSection.css';
import SearchIcon from './Search.svg';

const FAQSection = () => {
  return (
    <div className="faq-section">
      <h1>FAQs</h1>
      <h2>Frequently asked questions</h2>
      <p>Have Questions? We are here to help you.</p>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <div className="search-icon">
          <img src={SearchIcon} alt="Search" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
