import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLinks">
        Explore Flavor
        <ul>
          <li>Our Beers</li>
          <li>Our Food</li>
          <li>Our Story</li>
          <li>Merchandise</li>
          <li>Find Us</li>
          <li>News and Events</li>
          <li>Newsletter</li>
          <li>Careers</li>
          <li>Customer Service</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div className="social">
        <h2>Find Us Online</h2>
        <div className="socialLinks">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fab fa-facebook-square text-primary" />
          </a>
          <a href="mailto:webmaster@example.com" target="_blank">
            <i className="fas fa-envelope text-warning" />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <i className="fab fa-twitter-square text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
