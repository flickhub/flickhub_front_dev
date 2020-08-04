import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";
import flickhub from "./../../assets/images/logo3.jpg";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setScroll(true) : setScroll(false);
    });

    return () => window.removeEventListener("scroll", null);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scroll ? styles.navbar__yellow : ""}`}>
      <Link to="/">
        <img className={styles.flickhub__logo} alt="logo" src={flickhub} />
      </Link>
      <ul className={styles.navbar__route}>
        <li
          className={`${
            scroll ? styles.navbar__link__yellow : styles.navbar__link
          }`}
        >
          <Link to="/filter">Filtered Search</Link>
        </li>
        <li
          className={`${
            scroll ? styles.navbar__link__yellow : styles.navbar__link
          }`}
        >
          <Link to="/faq">FAQs</Link>
        </li>
        <li
          className={`${
            scroll ? styles.navbar__link__yellow : styles.navbar__link
          }`}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={`${
            scroll ? styles.navbar__link__yellow : styles.navbar__link
          }`}
        >
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
