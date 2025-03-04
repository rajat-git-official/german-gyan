// /src/sections/Footer/Footer.jsx
import React from 'react';
import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} German Gyan. All rights reserved.
      </p>
      <div className={styles.socials}>
        <a
          href="https://youtube.com/c/GermanGyan"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
        <a
          href="https://twitter.com/Germangyan04"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/company/german-gyan"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/germangyan1/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/Germangyan1"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;
