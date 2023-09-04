import style from "./Landing.module.css";
import styled from "styled-components";

function Landing() {
  const ButtonHolder = styled.div`
    margin: 0 auto;
    width: 230px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f4ecec;
    font-size: 14px;
    border: 2px solid #f4ecec;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.27s;
    margin-bottom: 75px;

    &:hover {
      background-color: #1468fb;
      border: 2px solid #1468fb;
    }
  `;

  const VideoHolder = styled.div`
    max-width: 1750px;
    overflow: hidden;
    border-radius: 50px;
    margin: 0 auto;

    @media (max-width: 1700px) {
      video {
        width: 100vw;
      }
    }

    video {
      width: 1;
    }
  `;

  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.contentContainer}>
          <h1 className={style.mainHeading}>AI Development Services</h1>
          <p className={style.mainParagraph}>
            Leverage our state-of-the-art custom AI services that <br />{" "}
            automate mundane processes and strengthen business intelligence
          </p>
        </div>
        <ButtonHolder>
          <p>Consult Our AI Experts</p>
        </ButtonHolder>
        <VideoHolder>
          <video
            autoPlay
            muted
            loop
            poster="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/chicago-banner.webp"
          >
            <source
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/ai-ml.mp4"
              type="video/mp4"
            ></source>
            <source
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/ai-ml.ogg"
              type="video/ogg"
            ></source>
          </video>
        </VideoHolder>
      </div>
    </>
  );
}

export default Landing;
