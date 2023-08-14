import style from "./PwaService.module.css";

const PwaService = () => {
  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.contentContainer}>
          <h1 className={style.mainHeading}>Progressive Web App Development</h1>
          <p className={style.mainParagraph}>
            Delivering user experiences that have the look and feel of a mobile
            app and the reach of the web.
          </p>
        </div>
      </div>
    </>
  );
};

export default PwaService;
