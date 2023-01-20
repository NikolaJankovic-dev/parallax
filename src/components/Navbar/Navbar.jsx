import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [img, setImg] = useState(
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/logo_appinventiv_white.svg"
  );
    const [navStyle, setNavStyle] = useState(style.navbarTransparent);
    
    const navigate = useNavigate();

  const setActive = () => {
    setImg(
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/logo_appinventiv.svg"
    );
    setNavStyle(style.navbarWhite);
  };
  const setInactive = () => {
    setImg(
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/logo_appinventiv_white.svg"
    );
    setNavStyle(style.navbarTransparent);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive();
      } else {
        setInactive();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={navStyle}>
          <img src={img} alt="logo" width={"200px"}
              onPointerDown={() => {
                  navigate("/");
                }}
          />
      <div
        className={style.menu}
        onPointerLeave={() => {
          if (window.scrollY === 0) setInactive();
        }}
      >
        <span
          className={style.menuItem}
          onPointerEnter={() => {
            setActive();
                  }}
                  onPointerDown={() => {
                      navigate("/about");
                    }}
        >
          <p>About</p>
          <span></span>
        </span>
        <span
          className={style.menuItem}
          onPointerEnter={() => {
            setActive();
          }}
        >
          <p>Services</p>
          <span></span>
        </span>
        <span
          className={style.menuItem}
          onPointerEnter={() => {
            setActive();
          }}
        >
          <p>Portfolio</p>
          <span></span>
        </span>
        <span
          className={style.menuItem}
          onPointerEnter={() => {
            setActive();
          }}
        >
          <p> Blog</p>
          <span></span>
        </span>
        <span className={style.contact}>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
