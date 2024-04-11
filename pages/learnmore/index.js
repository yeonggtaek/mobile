import React from "react";
import Image from "next/image";
import styles from "./learnmore.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function Learnmore() {
  return (
    <Layout>
      <section className={styles.learnmore}>
        <section className={styles.sectionWrap}>
          <div className={styles.imgWrap}>
            <Image
              className={styles.earth5}
              src="/earth5.png"
              alt="earth"
              width="400"
              height="300"
            />
          </div>
        </section>
        <section className={styles.sectionWrap}>
          <div className={styles.imgWrap}>
            <Image
              className={styles.ground}
              src="/ground.png"
              alt="ground"
              width="200"
              height="150"
            />
          </div>
          <div className={styles.buttonWrap}>
            <Button link="end">Next</Button>
          </div>
        </section>
        <div className={styles.text}>
          <p>
            Energy conservation: Being mindful of energy usage by turning off
            lights, appliances, and electronics when not in use, and using
            energy-efficient products.
          </p>
          <p>
            Sustainable transportation: Opting for walking, biking, carpooling,
            or using public transportation instead of driving alone can reduce
            carbon emissions.
          </p>
        </div>
      </section>
    </Layout>
  );
}