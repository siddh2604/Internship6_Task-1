// src/components/Services.js
import React from "react";
import styles from "./Services.module.css";
import Footer from "../Footer/Footer";

const Services = () => {
  return (
    <>
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <h2>Our Services</h2>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <img src="Image1.webp" alt="Service 1" />
              <h3>Precision Farming</h3>
              <p>
                Utilize data and technology to maximize crop yields and
                efficiency.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <img src="Image2.jpeg" alt="Service 2" />
              <h3>Sustainable Practices</h3>
              <p>
                Adopt environmentally friendly farming techniques to preserve
                resources.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <img src="Image3.jpeg" alt="Service 3" />
              <h3>Consulting Services</h3>
              <p>
                Get expert advice and strategies tailored to your agricultural
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
