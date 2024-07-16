import Image from "next/image";

export default function ToplistItem({ casino }) {
  const { title, image, numbersRating, starsRating, excerpt, link } = casino;
  const imagePath = `/images/logos/${image}`;

  return (
    <div>
      hello
      <Image src={imagePath} alt={`${title} logo`} width={100} height={100} />
      <div>Rating in numbers {numbersRating}</div>
      <div>Rating in stars {starsRating}</div>
      <div>excerpt {excerpt}</div>
      <a href={link}>Visit {title}</a>
    </div>
  );
}


