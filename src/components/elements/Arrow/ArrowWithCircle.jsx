import style from "./ArrowWithCircle.module.css"


const ArrowWithCircle = () => {
  return (
    <span className={style.appiCta}>
      <span className={style.arrow}>
        <i><span>→</span></i>
        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <g fill="none" stroke="#0092ff" strokeWidth="2" strokeLinejoin="round" >
            <circle className={style.arrowIconCircle} cx="16" cy="16" r="15.12"></circle>
          </g>
        </svg>
      </span>
    </span>
  )
} 

export default ArrowWithCircle;

