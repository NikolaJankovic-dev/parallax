import { useNavigate } from "react-router-dom";
import { SiIos, SiAndroid, SiReact, SiPwa, SiProbot } from "react-icons/si";
import { IoCloudUploadOutline, IoLaptopOutline } from "react-icons/io5";
import style from "./ServiceMenu.module.css"

const menuItems = [
  {
    id: 1,
    title: "IOS",
    logo: <SiIos className={style.logo} />,
    link: "/ios",
  },
  {
    id: 2,
    title: "Android",
    logo: <SiAndroid className={style.logo} />,
    link: "/android"
  },
  {
    id: 3,
    title: "Web Development",
    logo: <IoLaptopOutline className={style.logo} />,
    link: "/web"
  },
  {
    id: 4,
    title: "Cloud",
    logo: <IoCloudUploadOutline className={style.logo} />,
    link: "/cloud",
  },
  {
    id: 5,
    title: "React",
    logo: <SiReact className={style.logo} />,
    link: "/react",
  },
  {
    id: 6,
    title: "PWA",
    logo: <SiPwa className={style.logo} />,
    link: "/pwa",
  },
  {
    id: 7,
    title: "AI-ML",
    logo: <SiProbot className={style.logo} />,
    link: "/alml",
  }
]

const ServiceMenu = ({handleHide, handleNavActive, handleNavInactive}) => {
  
  const navigate = useNavigate();

  return (
      <div 
        className={style.navbarWithMenu}
        onPointerLeave={() => {handleHide(), handleNavInactive()}}
        onPointerEnter={handleNavActive}
      >
        <div className={style.container}>
      {menuItems.map(item => (
        <div 
          className={style.menuItems} 
          key={item.id}
          onPointerDown={() => {
            navigate(item.link);
          }}
        >
          <span className={style.logoWrapper}>{item.logo}</span>
          <span className={style.title}>{item.title}</span>
        </div>
      ))}
      </div>
    </div>
 )
}

export default ServiceMenu