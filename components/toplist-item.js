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
        <picture>
          <img
            src={imagePathMobile}
            alt={`${title} logo`}
            width={150}
            height={50}
            source srcSet={`${imagePathMobile} 480w, ${imagePathDesktop} 768w`}
            sizes="(min-width: 480px) 768px, 480px"
          />
        </picture>

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
