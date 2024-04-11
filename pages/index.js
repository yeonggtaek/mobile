import { useEffect, useState, useRef } from "react";
import styles from "@/styles/Home.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

const items = [-5, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 5];

export default function Home() {
  const requestId = useRef();
  const [pos, setPos] = useState({ top: 0, left: 0 });
  function animate(timestamp) {
    requestId.current = requestAnimationFrame(animate);

    setPos((pos) => {
      const top = items[Math.floor(Math.random() * items.length)];
      const left = items[Math.floor(Math.random() * items.length)];
      return { top, left };
    });
  }

  useEffect(() => {
    requestId.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestId.current);
    };
  }, []);

  return (
    <Layout>
      <section className={styles.home}>
        <div className={styles.titleWrap}>
          <h1 className={styles.title} style={{ top: pos.top, left: pos.left }}>
            Save the <br />
            Earth
          </h1>
        </div>
        <Button link={"/start"}>Start</Button>
      </section>
    </Layout>
  );
}