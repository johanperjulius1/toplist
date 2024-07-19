import Image from "next/image";
import classes from "./toplist-item.module.css";

export default function ToplistItem({ casino }) {
  const { title, image, starsRating, excerpt, link } = casino;
  const imagePath = `/images/logos/${image}`;

  return (
    <div className={classes["toplist-item"]}>
      <div className={classes["toplist-item__container toplist-item__container-left"]}>
        <Image src={imagePath} alt={`${title} logo`} width={100} height={100} />
        <div>Rating in stars {starsRating}</div>
        <div>excerpt {excerpt}</div>
      </div>
      <div className={classes["toplist-item__container toplist-item__container-right"]}>
        <a className={classes["toplist-item__button"]} href={link}>Besok casinot {title}</a>
      </div>
    </div>
  );
}

