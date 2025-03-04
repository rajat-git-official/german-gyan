// /src/sections/Hero/Hero.jsx
import React from 'react';
import styles from './HeroStyles.module.css';

function Hero() {
  return (
    <section id="hero" className={`${styles.heroSection} fade-in`}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1>Master German with Confidence—Go Drive & Get Bossy!</h1>
        <p>
          Empower your future with expert-led German language courses tailored
          for personal growth and professional success.
        </p>
        <a
          href="https://www.youtube.com/c/GermanGyan"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">Watch Free Videos</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
