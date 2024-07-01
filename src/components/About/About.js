// src/components/About.js
import React from "react";
import styles from "./About.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2>About Us</h2>
          <p>
            At AgroFuture, we are driven by a passion for agriculture and a
            commitment to sustainability...
          </p>
          <div className={styles.missionVision}>
            <div className={styles.mission}>
              <h3>Our Mission</h3>
              <p>
                To provide the agricultural sector with advanced technologies
                and sustainable practices...
              </p>
            </div>
            <div className={styles.vision}>
              <h3>Our Vision</h3>
              <p>
                We envision a world where agricultural systems are optimized for
                both yield and environmental stewardship...
              </p>
            </div>
          </div>
          <div className={styles.values}>
            <h3>Our Core Values</h3>
            <ul>
              <li>
                <strong>Innovation:</strong> We embrace the latest technologies
                and innovative approaches...
              </li>
              <li>
                <strong>Sustainability:</strong> We are committed to promoting
                practices that protect...
              </li>
              <li>
                <strong>Integrity:</strong> We operate with honesty and
                transparency in all our interactions...
              </li>
              <li>
                <strong>Collaboration:</strong> We believe in the power of
                working together with farmers...
              </li>
              <li>
                <strong>Excellence:</strong> We strive for excellence in
                everything we do...
              </li>
            </ul>
          </div>
          <div className={styles.impact}>
            <h3>How We Make a Difference</h3>
            <ul>
              <li>
                <strong>Precision Farming:</strong> Leveraging data and
                technology to optimize crop management...
              </li>
              <li>
                <strong>Sustainable Practices:</strong> Advocating for and
                implementing eco-friendly methods...
              </li>
              <li>
                <strong>Consulting Services:</strong> Providing expert advice
                and tailored strategies...
              </li>
              <li>
                <strong>Research and Development:</strong> Continuously
                exploring new ideas and technologies...
              </li>
              <li>
                <strong>Community Engagement:</strong> Supporting local
                communities through educational programs...
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
