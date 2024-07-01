// src/components/Testimonials.js
import React from "react";
import styles from "./Testimonials.module.css";
import Footer from "../Footer/Footer";

const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.container}>
          <h2>Testimonials</h2>
          <div className={styles.testimonialsContent}>
            <div className={styles.testimonial}>
              <p>
                "AgroFuture's solutions have transformed our farming practices
                and significantly boosted our yields."
              </p>
              <h4>- John Doe, Farmer</h4>
            </div>
            <div className={styles.testimonial}>
              <p>
                "The sustainable practices recommended by AgroFuture helped us
                preserve our resources and reduce costs."
              </p>
              <h4>- Jane Smith, Agronomist</h4>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Testimonials;
