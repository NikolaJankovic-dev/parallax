import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../../elements/Arrow/ArrowIcon";
import ArrowWithCircle from "../../../elements/Arrow/ArrowWithCircle";
import Button from "../../../elements/Button/Button";
import style from "./Hero.module.css"

const Hero = ({modalHandler}) => {
  
  const navigate = useNavigate();

  return (
    <div className={style.heroWrapper}>
        <div className={style.hero}>
          <div className={style.title}>
            <div className={style.breadCrumbWrapper}>
              <span className={style.arrow}><ArrowIcon/></span>
              <span onClick={() => {navigate("/")}} style={{cursor: "pointer"}}>Home</span>
              <span className={style.slash}>/</span>
              <span className={style.active}>iOS App Development Company</span>
            </div>
            <div className={style.iosAppText}>
              <h2 className={style.mainTitle}>iOS App <br />  Development Company</h2>
              <p className={style.mainText}>Develop next-gen iOS apps that are quality tested for perfection with future-forward iOS application development services.</p>
              <Button backGround="white" textColor="#0092FF" paddingX="45px" paddingY="17px" handler={modalHandler}>
                Consult our iOS Team
                <ArrowWithCircle />
              </Button> 
          </div>
          </div>
          <div>
            <img className={style.heroImage} src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/ios-scrn.webp" alt="ios app development" loading="lazy" />
          </div>
        </div>
      </div>
  )
}

export default Hero;