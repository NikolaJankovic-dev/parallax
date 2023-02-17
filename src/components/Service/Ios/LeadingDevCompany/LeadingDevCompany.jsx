import style from "./LeadingDevCompany.module.css";

const LeadingDevCompany = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>
        The Process That Makes Us a Leading <br />
        iPhone Application Development Company
      </h1>
      <p className={style.text}>
        We are an iOS app development company in USA known for helping
        businesses elevate their business strategy, build viable solutions,
        design memorable experiences, and code apps that add high value to
        users’ lives.
      </p>
      <div className={style.processWrapper}>
        <div className={style.processItem}>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/app-discovery-ios.svg"
            alt="logo1"
          />
          <h2>App Discovery</h2>
        </div>
        <div className={style.processItem}>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/UI-UX-Design.svg"
            alt="logo2"
          />
          <h2>UI/UX Design</h2>
        </div>
        <div className={style.processItem}>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/multiple-platform-deve.svg"
            alt="logo3"
          />
          <h2>Multi-platform Development</h2>
        </div>
        <div className={style.processItem}>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/software-deployment-and-maintenance.svg"
            alt="logo4"
          />
          <h2>Quality Assurance</h2>
        </div>
        <div className={style.processItem}>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/submission.png"
            alt="logo5"
          />
          <h2>App Store Submission</h2>
        </div>
        <div className={style.processItem}>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Maintainance.png"
            alt="logo6"
          />
          <h2>Post-launch Maintenance</h2>
        </div>
      </div>
    </div>
  );
};

export default LeadingDevCompany;
