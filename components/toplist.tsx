import React from "react";
import classes from "./toplist.module.css";
import ToplistItem from "./toplist-item";
import { getAllPostsData } from "../lib/toplist-utils";

export default function Toplist() {
  const casinosData = getAllPostsData();
  const dateDay = new Date().getDate().toString()
  const dateMonth = new Date().toLocaleString('default', { month: 'long' })
  const dateYear = new Date().getFullYear()
  return (
    <div>
      <h1>Topp 10 bästa online casinon</h1>
      <h2>Bonusarna uppdaterades den {dateDay} {dateMonth} {dateYear} </h2>
      {casinosData.map((casino) => (
        <ToplistItem key={casino.title} casino={casino} />
      ))}
    </div>
  );
}
