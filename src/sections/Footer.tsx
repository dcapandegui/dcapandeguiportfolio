import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import "../styles/Footer.css"

const Footer: React.FC = () => {
  return (
    <section 
    id='footer'
    className="socialCard">
      <h3>
        Thanks! 
      </h3>
      <div className='socialCardDiv'>
      <a href="#" className="socialCard__container socialCard__containerOne">
        <FaInstagram className="socialCard__icon" />
      </a>

      <a href="#" className="socialCard__container socialCard__containerTwo">
        <FaTwitter className="socialCard__icon" />
      </a>

      <a href="#" className="socialCard__container socialCard__containerThree">
        <FaLinkedin className="socialCard__icon" />
      </a>

      <a href="#" className="socialCard__container socialCard__containerFour">
        <FaWhatsapp className="socialCard__icon" />
      </a>
      </div>
      
    </section>
  );
};

export default Footer;
