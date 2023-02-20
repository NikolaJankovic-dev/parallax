import { useState } from "react";
import Carousel from "react-simply-carousel";
import style from "./IosProjects.module.css";

const carouselItems = [
  {
    id: 1,
    image:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/case-ikea.webp",
    title: "IKEA",
    text: "An ERP solution that has become the best source of ROI measurement and contacts collection for 7 IKEA outlets across UAE.",
  },
  {
    id: 2,
    image:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/dominos-study2.webp",
    title: "Dominos",
    text: "Learn how we redefined the app UX strategy to increase their conversion rate by 23%. ",
  },
  {
    id: 3,
    image:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/case-jobget.webp",
    title: "JobGet",
    text: "How we transformed the recruitment landscape with AI by reducing the job search time for blue-collar workers from months to days.",
  },
  {
    id: 4,
    image:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/kfc-study2.webp",
    title: "KFC",
    text: "How we helped KFC expand its digital presence in the Middle East leading to 28% increase in the conversion rate.",
  },
  {
    id: 5,
    image:
      "	https://appinventiv.com/wp-content/themes/twentynineteen-child/images/youcomm-study2.webp",
    title: "Youcomm",
    text: "Transforming in-hospital patient communication by providing real-time access to medical help",
  },
];

const IosProjects = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideIndexChange = (newActivSlideIndex) => {
    setActiveSlideIndex(newActivSlideIndex);
  };

  return (
    <div className={style.wrapper}>
      <h1>
        iOS Projects Built to Make <br /> Businesses High Revenue Friendly
      </h1>
      <Carousel
        responsiveProps={[
          { minWidth: 993, itemsToShow: 2 },
          { maxWidth: 992, itemsToShow: 1 },
          
        ]}
        containerProps={{
          style: {
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-between",
            userSelect: "text",
          },
        }}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 30,
            height: 30,
            borderRadius: "50%",
            alignSelf: "center",
            margin: "5px",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 30,
            height: 30,
            borderRadius: "50%",
            alignSelf: "center",
          },
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              margin: "5px",
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
            },
          },
          activeItemBtnProps: {
            style: {
              margin: "5px",
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black",
            },
          },
        }}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={handleSlideIndexChange}
        itemsToScroll={1}
        disableNavIfEdgeActive={true}
        speed={400}
        easing="linear"
      >
        {carouselItems.map((item) => (
          <div key={item.id} className={style.carouselItem}>
            <img src={item.image} alt="ikea pgoto" />
            <h2 className={style.title}>{item.title}</h2>
            <p className={style.text}>{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default IosProjects;
