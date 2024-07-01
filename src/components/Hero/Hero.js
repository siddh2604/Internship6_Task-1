// src/components/Hero.js
import React from "react";
import styles from "./Hero.module.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h2>Growing a Sustainable Future</h2>
          <p>
            Leading the way in innovative and sustainable agricultural
            solutions.
          </p>
          <Link to="/services" className={styles.btn}>
            Explore Services
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hero;
