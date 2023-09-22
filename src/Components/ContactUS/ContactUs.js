import React from 'react';
import './ContactUs.css';
import Phone from '../../resources/Phone.svg';
import Email from '../../resources/Email.svg';
import Location from '../../resources/Location.svg';
import SearchIcon from './Search.svg';


const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2 className="title">CONTACT US</h2>
      <div className="sections">
        <div className="left-section">
          <h3>Contact Information</h3>
          <p>Fill up this form, and our Team will get back to you within 24 hrs.</p>
          <div className="container"><img src={Phone} alt="Search" width="100" height="100" className="image"/><p>+121 26250007</p></div>
          <div className="container"><img src={Email} alt="Search" width="100" height="100" className="image"/><p>support@quantblu.io</p></div>
          <div className="container"><img src={Location} alt="Search" width="100" height="100" className="image"/><p>B-15 Main Street, Bangalore</p></div>
        </div>
        <div className="right-section">
          <form>
          <div className="search-box">
            <input type="text" placeholder="Name" />
            </div>
            <div className="search-box">
            <input type="email" placeholder="Email" />
            </div>
            <div className="search-box">
            <input type="number" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Type your message here..."></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;