import Layout from "@/Components/Layout";
import styles from "./end.module.css";


export default function End() {
  return (
    <Layout>
    <section className={styles.end}>
      <div className={styles.text}>
        <p>Thank you!</p>
      </div>
    </section>
    </Layout>
  );
}