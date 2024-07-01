// src/components/Header.js
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to control mobile menu

  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false); // Function to close the menu
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${sticky ? styles.sticky : ""}`}>
      <div className={`${styles.container}`}>
        <h1 className={styles.logo}>AgroFuture</h1>
        <nav className={`${styles.nav} ${showMenu ? styles.showMenu : ""}`}>
          <ul className={styles.navLinks}>
            {["About", "Services", "Testimonials", "Blog", "Contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={`/${section.toLowerCase()}`}
                    onClick={closeMenu} // Close menu when link is clicked
                  >
                    {section}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
          <div
            className={`${styles.bar} ${showMenu ? styles.rotate45 : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${showMenu ? styles.fadeOut : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${showMenu ? styles.rotate135 : ""}`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
