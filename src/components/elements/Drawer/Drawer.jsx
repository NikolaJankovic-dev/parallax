import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";
import style from "./Drawer.module.css";

const menuItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Service",
    link: "",
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
];
const subMenuItems = [
  {
    id: 1,
    title: "IOS",
    link: "/ios",
  },
  {
    id: 2,
    title: "Android",
    link: "/android",
  },
  {
    id: 3,
    title: "Web",
    link: "/web",
  },
  {
    id: 4,
    title: "Cloud",
    link: "/cloud",
  },
  {
    id: 5,
    title: "React",
    link: "/react",
  },
  {
    id: 6,
    title: "PWA",
    link: "/pwa",
  },
  {
    id: 7,
    title: "AI-ML",
    link: "/alml",
  },
];

const Drawer = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const navigate = useNavigate();

  const handleArrowClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className={style.drawerWrapper}>
      <div className={style.container}>
        {menuItems.map((item) =>
          item.title === "Service" ? (
            <div key={item.id}>
              <span className={style.service}>
                {item.title}
                <span className={style.icon}>
                  <IoChevronDownOutline
                    className={style.icon}
                    onClick={handleArrowClick}
                  />
                </span>
              </span>
              {showSubMenu && <SubMenu />}
            </div>
          ) : (
            <div
              className={style.menuItems}
              key={item.id}
              onPointerDown={() => {
                navigate(item.link);
              }}
            >
              <span className={style.title}>{item.title}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const SubMenu = () => {
  const navigate = useNavigate();
  return (
    <div className={style.subMenuWrapper}>
      {subMenuItems.map((item) => (
        <div className={style.subMenuItem} key={item.id}>
          <span
            onPointerDown={() => {
              navigate(item.link);
            }}
          >
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Drawer;
