import Image from "next/image";
import classes from "./toplist-item.module.css";
import Rating from './rating';

export default function ToplistItem({ casino }) {
  const { title, image, rating, excerpt, link } = casino;
  const imagePath = `/images/logos/${image}`;

  return (
    <div className={`${classes["toplist-item"]}`}>
      <div className={`${classes["toplist-item__container"]} ${classes["toplist-item__container-left"]}`}>
        <Image src={imagePath} alt={`${title} logo`} width={150} height={50} />
        <Rating rating={rating} />
        <div>excerpt {excerpt}</div>
      </div>
      <div className={`${classes["toplist-item__container"]} ${classes["toplist-item__container-right"]}`}>
        <a className={classes["toplist-item__button"]} href={link}>Besok casinot </a>
      </div>
    </div>
  );
}