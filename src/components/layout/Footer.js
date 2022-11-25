import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./Footer.module.css";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
      </ul>
      <p className={styles.copyright}>
        <span>Costs</span> &copy; {ano}
      </p>
    </footer>
  );
}
