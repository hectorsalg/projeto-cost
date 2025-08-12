import {FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./Footer.module.css";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li>
          <a href="https://www.linkedin.com/in/hectorsalg/" target="_blank"><FaLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/hectorsalg" target="_blank"><FaGithub /></a>
        </li>
      </ul>
      <p className={styles.copyright}>
        <span>Costs</span> &copy; {ano}
      </p>
    </footer>
  );
}
