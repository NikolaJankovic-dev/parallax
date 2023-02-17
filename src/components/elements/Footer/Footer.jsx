import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import style from "./Footer.module.css";

const addresses = [
  {
    id: 1,
    country: "HQ India",
    address: `B 25, Sector 58, Noida-
        201301, Delhi -
        NCR, India`,
  },
  {
    id: 2,
    country: "USA",
    address: `79, Madison Ave
        Manhattan, NY 10001,
        USA`,
  },
  {
    id: 3,
    country: "Australia",
    address: `Suite 87, Level 35, 100
        Barangaroo Avenue
        Sydney, NSW 2000, Australia`,
  },
  {
    id: 4,
    country: "UAE",
    address: `Tiger Al Yarmook 
        Building ,13th floor B- 
        block, Al nahda street - 
        Sharjah`,
  },
  {
    id: 5,
    country: "UK",
    address: `3rd Floor, 86-90
        Paul Street EC2A
        4NE London, UK`,
  },
];

const Footer = () => {
  const [showLegalText, setShowLegalText] = useState(false);

  const handleLegaTextShowAndHide = () => {
    setShowLegalText(!showLegalText);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.addresses}>
        <Link to="/">
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/logo.svg"
            alt="logo"
          />
        </Link>
        {addresses.map((addres) => (
          <div className={style.addresWrapper}>
            <p className={style.country}>{addres.country}</p>
            <p className={style.addres}>{addres.address}</p>
          </div>
        ))}
      </div>
      <div className={style.legalAndSocial}>
        <div className={style.dmca}>
          <p>
            Full stack mobile (iOS, Android) and web app design and development
            agency
          </p>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/dmca-logo.png"
            alt="DMCA logo"
          />
        </div>
        <div className={style.legalInfo}>
          <p onClick={handleLegaTextShowAndHide}>Statutory legal information</p>
          {showLegalText && (
            <div>
              <p className={style.legalText}>
                Appinventiv is the Registered Name of Appinventiv Technologies
                Pvt. Ltd., a mobile app development company situated in Noida,
                U.P. India at the street address - B- 25, Sector 58, Noida, U.P.
                201301.
              </p>
              <p>
                All the personal information that you submit on the website -
                (Name, Email, Phone and Project Details) will not be sold,
                shared or rented to others. Our sales team or the team of mobile
                app developers only use this information to send updates about
                our company and projects or contact you if requested or find it
                necessary. You may opt out of receiving our communication by
                dropping us an email on - info@appinventiv.com
              </p>
            </div>
          )}
        </div>
        <div className={style.socialNetworks}>
          <p className={style.copyRight}>2021-2022 (c) Appinventiv</p>
          <p className={style.privacyPolice}>Privacy Policy</p>
          <div className={style.socNetLinks}>
            <a href="https://www.facebook.com/Appinventiv/" target="_blank">
              <FaFacebookSquare size={24} color="#0092ff" />
            </a>
            <a href="https://twitter.com/appinventiv" target="_blank">
              <FaTwitter size={24} color="#0092ff" />
            </a>
            <a href="https://www.instagram.com/appinventiv/" target="_blank">
              <FaInstagram size={24} color="#0092ff" />
            </a>
            <a
              href="https://www.linkedin.com/company/appinventiv/"
              target="_blank"
            >
              <FaLinkedin size={24} color="#0092ff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
