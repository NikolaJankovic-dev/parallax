import style from "./Empowering.module.css";

const Empowering = () => {
  return (
    <div className={style.empoweringWrapper}>
      <div className={style.content}>
        <h1>
          Empowering Your Business Through <br />
          Custom iOS Application Development
        </h1>
        <div className={style.container}>
          <div className={style.empoweringText}>
            <p>
              As a full-stack iPhone App Development company we have deployed
              hundreds of native iOS apps that witnessed skyrocketing success
              rates and were chartbusters on the App Store. We have a highly
              skilled team of experienced iPhone mobile app developers and our
              primary tech stack for developing iOS solutions is Objective-C and
              Swift.
            </p>
            <p>
              We are an iOS mobile app development company with a dedicated team
              of iPhone app developers that provide custom iPhone application
              development services keeping in regard the specific design and iOS
              application development company guidelines related to all
              individual platforms - iPad, iPhone, Apple TV, and Apple Watch.
              Our iOS app developers have built apps for diverse use cases
              ranging from real-time analytics to route matching, geo-tagging,
              video streaming, and more across multiple sectors.
            </p>
          </div>
          <div className={style.empoweringPhoto}></div>
        </div>
      </div>
    </div>
  );
};

export default Empowering;
