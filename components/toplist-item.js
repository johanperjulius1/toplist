import Image from "next/image";
import classes from "./toplist-item.module.css";
import Rating from "./rating";

export default function ToplistItem({ casino }) {
  const { title, imageMobile, imageDesktop, rating, excerpt, link } = casino;
  const imagePathMobile = `/images/logos/${title}/${imageMobile}`;
  const imagePathDesktop = `/images/logos/${title}/${imageDesktop}`;

  return (
    <div className={`${classes["toplist-item"]}`}>
      <div
        className={`${classes["toplist-item__container"]} ${classes["toplist-item__container-left"]}`}
      >
          <img
            src={imagePathMobile}
            alt={`${title} logo`}
            width={150}
            height={50}
            srcSet={`${imagePathMobile} 300w, ${imagePathMobile} 768w, ${imagePathDesktop} 1280w`}
           sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
          />

        <Rating rating={rating} />
        <div> {excerpt}</div>
      </div>
      <div
        className={`${classes["toplist-item__container"]} ${classes["toplist-item__container-right"]}`}
      >
        <a className={classes["toplist-item__button"]} href={link}>
          Besok casinot{" "}
        </a>
      </div>
    </div>
  );
}
