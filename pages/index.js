import styles from "@/styles/Home.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function Home() {
  return (
    <section className={styles.home}>
      <h1 className={styles.title}>
        Save the <br />
        Earth
      </h1>
      <Button link={"/start"}>Start</Button>
    </section>
  );
}