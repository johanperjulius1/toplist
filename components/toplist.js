import React from "react";
import classes from "./toplist.module.css";
import ToplistItem from "./toplist-item";
import { getAllPostsData } from "@/lib/toplist-utils";

export default function Toplist() {
  const casinosData = getAllPostsData();
  
  return (
    <div>
      <h1>Topp 10 bästa online casinon</h1>
      <h2>Bonusarna uppdaterades den 8 juli</h2>
      {casinosData.map((casino) => (
        <ToplistItem key={casino.title} casino={casino} />
      ))}
    </div>
  );
}
