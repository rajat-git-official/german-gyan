// /src/sections/About/About.jsx
import React from 'react';
import styles from './AboutStyles.module.css';

function About() {
  return (
    <section id="about" className={`${styles.aboutSection} container fade-in`}>
      <h2 className="sectionTitle">Welcome to German Gyan!</h2>
      <p className={styles.intro}>
        Founded by <strong>Nidhi Jain</strong>, German Gyan is your ultimate
        destination for comprehensive German language learning—both online
        and offline. Whether you want to boost your career or embrace the
        beauty of the language, we’ve got you covered!
      </p>

      <div className={styles.reasons}>
        <h3>Why Choose German Gyan?</h3>
        <ul>
          <li>Expertise in Multilingual Teaching</li>
          <li>Flexible Learning Schedules</li>
          <li>Comprehensive Learning Resources</li>
          <li>Weekend Free Speaking Sessions</li>
          <li>Exam Preparation & Official Tie-Ups</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
