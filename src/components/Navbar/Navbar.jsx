import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ServiceMenu from "../Service/ServiceMenu";
import style from "./Navbar.module.css";
import menuIcon from "../../assets/images/menuIcon.png";
import styled from "styled-components";

const Navbar = ({isLandscape, setIsLandscape}) => {
  const [img, setImg] = useState(
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/logo_appinventiv_white.svg"
  );
  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const [navStyle, setNavStyle] = useState(style.navbarTransparent);
  // const [isLandscape, setIsLandscape] = useState(
  //   window.innerWidth > window.innerHeight
  // );
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleShowServiceMenu = () => {
    setShowServiceMenu(true);
  };

  const handleHideServiceMenu = () => {
    setShowServiceMenu(false);
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

  // styles
  const textPartMenu = {
    display: "flex",
    flexDirection: "column",
    fontSize: "25px",
    gap: "25px",
    padding: "5px",
  };
  const menuIconSt = {
    width: "40px",
    height: "40px",
  };

  const Close = styled.div`
    /* padding-right: 60px; */
    font-weight: bold;
    font-size: 30px;
  `;

  return (
    <>
      <div className={navStyle}>
        <img
          className={style.logoHover}
          src={img}
          alt="logo"
          width={"200px"}
          onPointerDown={() => {
            navigate("/");
          }}
        />
        {!isLandscape && !toggle && (
          <span
            className="toggleMenu"
            onClick={() => {
              setToggle(true);
            }}
          >
            <img style={menuIconSt} src={menuIcon} alt="open menu" />
          </span>
        )}
        {isLandscape && (
          <div
            className={style.menu}
            onPointerLeave={() => {
              if (window.scrollY === 0) setInactive();
            }}
          >
            <span
              className={style.menuItem}
              onPointerEnter={() => {
                setActive(), handleHideServiceMenu();
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
                setActive(), handleShowServiceMenu();
              }}
            >
              <p>Services</p>
              <span></span>
            </span>
            <span
              className={style.menuItem}
              onPointerEnter={() => {
                setActive(), handleHideServiceMenu();
              }}
              onPointerDown={() => {
                navigate("/portfolio");
              }}
            >
              <p>Portfolio</p>
              <span></span>
            </span>
            <span
              className={style.menuItem}
              onPointerEnter={() => {
                setActive(), handleHideServiceMenu();
              }}
            >
              <p>Blog</p>
              <span></span>
            </span>
            <span className={style.contact}>Contact</span>
          </div>
        )}

        {!isLandscape && toggle && (
          <div className={style.mobileMenu}>
            <div style={textPartMenu} className="textPart">
              <span
                onPointerEnter={() => {
                  setActive(), handleHideServiceMenu();
                  setToggle(false);
                }}
                onPointerDown={() => {
                  navigate("/about");
                }}
              >
                <p>About</p>
                <span></span>
              </span>
              <span
                onPointerEnter={() => {
                  setActive(), handleShowServiceMenu();
                }}
              >
                <p>Services</p>
                <span></span>
              </span>
              <span
                onPointerEnter={() => {
                  setActive(), handleHideServiceMenu();
                  setToggle(false);
                }}
                onPointerDown={() => {
                  navigate("/portfolio");
                }}
              >
                <p>Portfolio</p>
                <span></span>
              </span>
              <span
                onPointerEnter={() => {
                  setActive(), handleHideServiceMenu();
                  setToggle(false);
                }}
              >
                <p>Blog</p>
                <span></span>
              </span>
              <span>Contact</span>
            </div>
            <Close
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              X
            </Close>
          </div>
        )}
      </div>
      {showServiceMenu && (
        <ServiceMenu
          handleHide={handleHideServiceMenu}
          handleNavActive={setActive}
          handleNavInactive={setInactive}
          toggle={toggle}
          setToggle={setToggle}
        />
      )}
    </>
  );
};

export default Navbar;
