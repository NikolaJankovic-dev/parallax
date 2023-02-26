import style from "./TrustedBy.module.css"

const TrustedBy = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.trusted}>
        <div className={style.line}></div>
          TRUSTED BY
      </div>
      <div className={style.carouselWrapper}>
        <div className={style.carousel}>
          <div className={style.carouselItem}>
            <img className={style.logo} src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/ikea-logo.svg" alt="IKEA - Logo" />
          </div>
          <div className={style.carouselItem}>
            <img className={style.logo} src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/kpmg.svg" alt="KPMG - Logo" />
          </div>
          <div className={style.carouselItem}>
            <img className={style.logo} src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/jobget.png" alt="Jobget - logo" />
          </div>
          <div className={style.carouselItem}>
            <img className={style.logo} src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/adida-logo.png" alt="Adidas - Logo" />
          </div>
          <div className={style.carouselItem}>
            <img className={style.logo} src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/kfc-com.png" alt="Kfc - Logo" />
          </div>
        </div>      
      </div>
  
    </div>
  )
}

export default TrustedBy;