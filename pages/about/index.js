import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/Components/Button";
import styles from "./about.module.css";
import Layout from "@/Components/Layout";
import VerticalChart from "@/Components/VerticalChart";

export default function about() {
  const [imgIdx, setImgIdx] = useState(0);
  const nextImage = () => {
    setImgIdx((curIdx) => {
      if (curIdx >= 2) {
        return 0;
      }
      return curIdx + 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Layout>
      <section className={styles.about}>
        <div className={styles.text}>
          <p>Climate Chart</p>
        </div>
        <div className={styles.container}>
          <VerticalChart/>
        </div>
        <div className={styles.imgContainer} onClick={nextImage}>
          <div className={`${styles.imgBox} ${styles[`box-${imgIdx}`]}`}>
            <img className={styles.img} src="/bear.png" />
            <img className={styles.img} src="/air.png" />
            <img className={styles.img} src="/earth4.png" />
          </div>
        </div>
        <div className={styles.button}>
          <Button link="/quiz">Next</Button>
        </div>
      </section>
    </Layout>
  );
}