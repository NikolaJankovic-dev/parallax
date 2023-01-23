import React from "react";
import style from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={style.grid}>
      <div
        style={{
          gridColumn: "1/3",
        }}
      >
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/galleryimg3.webp"
          alt="gallery"
          className={style.img}
        />
      </div>
      <div
        style={{
          gridColumn: "3/5",
        }}
      >
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/galleryimg2.webp"
          alt="gallery"
          className={style.img}
        />
      </div>
      <div
        style={{
          gridColumn: "5/9",
        }}
      >
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/galleryimg4.webp"
          alt="gallery"
          className={style.img}
        />
      </div>
      <div
        style={{
          gridColumn: "1/2",
        }}
      >
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/galleryimg5.webp"
          alt="gallery"
          className={style.img}
        />
      </div>
      <div
        style={{
          gridColumn: "2/3",
        }}
      >
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/galleryimg8.webp"
          alt="gallery"
          className={style.img}
        />
      </div>
      <div
        style={{
          gridColumn: "3/5",
          gridRow: "2/4",
        }}
      >
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/galleryimg6.webp"
          alt="gallery"
          className={style.img}
        />
      </div>
      <div
        style={{
          gridColumn: "5/7",
        }}
      >
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/galleryimg11.webp"
          alt="gallery"
          className={style.img}
        />
      </div>
      <div
        style={{
          gridColumn: "7/9",
        }}
      >
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/galleryimg7.webp"
          alt="gallery"
          className={style.img}
        />
      </div>
      <div
        style={{
          gridColumn: "1/3",
        }}
      >
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/galleryimg12.webp"
          alt="gallery"
          className={style.img}
        />
      </div>
      <div
        style={{
          gridColumn: "5/9",
        }}
      >
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/galleryimg9.webp"
          alt="gallery"
          className={style.img}
        />
      </div>
    </div>
  );
};

export default Gallery;
