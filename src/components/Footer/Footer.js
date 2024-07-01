// src/components/Footer.js
import React from "react";
import styles from "./Footer.module.css";
import Header from "../Header/Header";

const Footer = () => {
  return (
    <>
      <Header />
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; 2023 AgroFuture. All rights reserved.</p>
          <p>Follow us on social media for updates and insights.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
