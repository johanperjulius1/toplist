import React from "react";
import classes from "./toplist.module.css";
import ToplistItem from "./toplist-item";

const DUMMY_DATA = [
  {
    title: "LeoVegas",
    image: "leovegas-logo.png",
    starsRating: 5,
    excerpt: "Leovegas är ett av de bästa casinon på marknaden",
    link: "https://www.leovegas.com",
  },
  {
    title: "Casumo",
    image: "casumo-logo.png",
    starsRating: 4,
    excerpt: "Casumo är ett av de bästa casinon på marknaden",
    link: "https://www.casumo.com",
  },
];

export default function Toplist() {
  return (
    <div>
      <h1>Topp 10 bästa online casinon</h1>
      <h2>Bonusarna uppdaterades den 8 juli</h2>
      {DUMMY_DATA.map((casino) => (
        <ToplistItem key={casino.title} casino={casino} />
      ))}
    </div>
  );
}
