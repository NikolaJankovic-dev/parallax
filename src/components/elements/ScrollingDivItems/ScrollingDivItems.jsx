import style from "./ScrollingDivItems.module.css";

const ScrollingDivItems = ({ text }) => {
  return (
    <div className={style.paragrafs}>
      <p className={style.text}>{text}</p>
      <hr />
    </div>
  );
};

export default ScrollingDivItems;
