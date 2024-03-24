import Layout from "@/Components/Layout";
import styles from "./start.module.css";
import Button from "@/Components/Button";

export default function Start() {
  return (
    <section className={styles.start}>
      <div className={styles.text}>
        <p>Hi!</p>
        <p>Did you know that the Earth is suffering from climate change?</p>
        <p>Let’s take a look at the problems caused by climate change:</p>
      </div>
      <Button link="/about">Go</Button>
    </section>
  );
}