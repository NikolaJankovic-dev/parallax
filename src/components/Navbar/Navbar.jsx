import React, {useState, useEffect} from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
    const [img, setImg] = useState("https://appinventiv.com/wp-content/themes/twentynineteen-child/images/logo_appinventiv_white.svg");
    const [navStyle, setNavStyle] = useState(style.navbarTransparent)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setImg("https://appinventiv.com/wp-content/themes/twentynineteen-child/images/logo_appinventiv.svg");
                setNavStyle(style.navbarWhite);
            } else {
                setImg("https://appinventiv.com/wp-content/themes/twentynineteen-child/images/logo_appinventiv_white.svg");
                setNavStyle(style.navbarTransparent);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className={navStyle}>
      <img src={img} alt="logo" 
              width={
          "200px"
      }
          />
      <div className={style.menu}>
        <div>About</div>
        <div>Services</div>
        <div>Industries</div>
        <div>Portfolio</div>
        <div>Blog</div>
        <div className={style.contact}>Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
