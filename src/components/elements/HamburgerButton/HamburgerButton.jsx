import { useEffect } from "react";
import { useState } from "react";
import style from "./HamburgerButton.module.css";

const HamburgerButton = ({ navStyle, handleDrawer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    handleDrawer(isActive);
    console.log(isActive);
    // handleDrawer(isActive);
  }, [isActive]);

  const classForHamburger = isActive
    ? `${style.hamburger} ${style.isActive}`
    : style.hamburger;

  const classForLine = navStyle.includes("Transparent")
    ? style.lineLight
    : style.lineDark;

  return (
    <div className={classForHamburger} id="hamburger-1" onClick={handleClick}>
      <span className={classForLine}></span>
      <span className={classForLine}></span>
      <span className={classForLine}></span>
    </div>
  );
};

export default HamburgerButton;
