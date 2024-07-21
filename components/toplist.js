import React from "react";
import classes from "./toplist.module.css";
import ToplistItem from "./toplist-item";

const DUMMY_DATA = [
  {
    title: "LeoVegas",
    image: "leovegas-modile.webp",
    rating: 5,
    excerpt: "100% bonus upp till 4000 kr + 100 free spins",
    link: "https://www.leovegas.com",
  },
  {
    title: "Casumo",
    image: "casinostugan-mobile.webp",
    rating: 4,
    excerpt: "Bonus Upp till 1000 kr + 100 Gratissnurr + 100 kr i Live Casino",
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
