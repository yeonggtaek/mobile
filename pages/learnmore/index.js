import React from "react";
import Image from "next/image";
import styles from "./learnmore.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function Learnmore() {
  return (
    <Layout>
    <section className={styles.earth}>
      <Image
        className={styles.earth5}
        src="/earth5.png"
        alt="earth"
        width="300"
        height="300"
      />
      <Image
        className={styles.ground}
        src="/ground.png"
        alt="ground"
        width="300"
        height="300"
      />
      <Button link="readmore">Read More</Button>
      <ul>
        <li>Energy conservation: Being mindful of energy usage by turning off lights, appliances, and electronics when not in use, and using energy-efficient products.</li>
        <li>Sustainable transportation: Opting for walking, biking, carpooling, or using public transportation instead of driving alone can reduce carbon emissions.</li>
      </ul>
    </section>
    </Layout>
  );
}