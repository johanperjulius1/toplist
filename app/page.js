import Image from "next/image";
import styles from "./page.module.css";
import Toplist from "../components/toplist";

export default function Home() {
  return (
    <main className={styles.main}>
      <Toplist />
    </main>
  );
}
