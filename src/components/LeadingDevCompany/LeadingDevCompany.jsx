import { useLocation } from "react-router-dom";
import {
  leadingDevCompanyIos,
  leadingDevCompanyAndroid,
} from "../../text/text";
import style from "./LeadingDevCompany.module.css";

const LeadingDevCompany = () => {
  const location = useLocation();

  let text;

  switch (location.pathname) {
    case "/ios":
      text = leadingDevCompanyIos;
      break;
    case "/android":
      text = leadingDevCompanyAndroid;
      break;
  }

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>
        {text.title.title1} <br /> {text.title.title2}
      </h1>
      <p className={style.text}>{text.paragraph.p1}</p>
      <div className={style.processWrapper}>
        <div className={style.processItem}>
          <img src={text.processes.proces1.logoSrc} alt="logo1" />
          <h2>{text.processes.proces1.subtitle}</h2>
        </div>
        <div className={style.processItem}>
          <img src={text.processes.proces2.logoSrc} alt="logo2" />
          <h2>{text.processes.proces2.subtitle}</h2>
        </div>
        <div className={style.processItem}>
          <img src={text.processes.proces3.logoSrc} alt="logo3" />
          <h2>{text.processes.proces3.subtitle}</h2>
        </div>
        <div className={style.processItem}>
          <img src={text.processes.proces4.logoSrc} alt="logo4" />
          <h2>{text.processes.proces4.subtitle}</h2>
        </div>
        <div className={style.processItem}>
          <img src={text.processes.proces5.logoSrc} alt="logo5" />
          <h2>{text.processes.proces5.subtitle}</h2>
        </div>
        <div className={style.processItem}>
          <img src={text.processes.proces6.logoSrc} alt="logo6" />
          <h2>{text.processes.proces6.subtitle}</h2>
        </div>
        {text.processes.proces7.logoSrc && (
          <div className={style.processItem}>
            <img src={text.processes.proces7.logoSrc} alt="logo6" />
            <h2>{text.processes.proces7.subtitle}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadingDevCompany;
