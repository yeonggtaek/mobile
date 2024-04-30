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
        <div>
        <p className={styles.text3}>From 2019 to 2023, global warming caused a rise in sea levels. This rise occurred primarily due to the melting of polar ice caps and glaciers, as well as the thermal expansion of seawater. As temperatures increased worldwide, ice melted at an accelerated rate, contributing to the overall increase in ocean levels. This phenomenon poses significant risks to coastal communities, ecosystems, and infrastructure around the world.</p>
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