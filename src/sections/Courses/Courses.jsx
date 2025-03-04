// /src/sections/Courses/Courses.jsx
import React from 'react';
import styles from './CoursesStyles.module.css';

function Courses() {
  return (
    <section id="courses" className={`${styles.coursesSection} container fade-in`}>
      <h2 className="sectionTitle">German Language Courses</h2>
      <p className={styles.description}>
        Master German in your preferred language: 
        <strong>English, Hindi, Malayalam, or German!</strong>
      </p>

      <h3 className={styles.offerTitle}>Course Offerings</h3>
      <div className={styles.cardGrid}>
        {/** Single Course Card */}
        <div className={styles.courseCard}>
          <h4>A1</h4>
          <p>Fee: ₹16,000</p>
          <p>Duration: 1 - 1.5 months</p>
        </div>

        <div className={styles.courseCard}>
          <h4>A2</h4>
          <p>Fee: ₹18,000</p>
          <p>Duration: 1 - 1.5 months</p>
        </div>

        <div className={styles.courseCard}>
          <h4>B1</h4>
          <p>Fee: ₹22,000</p>
          <p>Duration: 2.5 - 3 months</p>
        </div>

        <div className={styles.courseCard}>
          <h4>B2</h4>
          <p>Fee: ₹27,000</p>
          <p>Duration: 2.5 - 3 months</p>
        </div>
      </div>

      <h3 className={styles.offerTitle}>Bundle Offers</h3>
      <div className={styles.cardGrid}>
        <div className={styles.courseCard}>
          <h4>A1 + A2</h4>
          <p>Fee: ₹25,000</p>
          <p>Duration: 2.5 - 3 months</p>
        </div>
        <div className={styles.courseCard}>
          <h4>A1 + A2 + B1</h4>
          <p>Fee: ₹39,000</p>
          <p>Duration: 4 - 5 months</p>
        </div>
        <div className={styles.courseCard}>
          <h4>A1 to B2</h4>
          <p>Fee: ₹58,000</p>
          <p>Duration: 6 - 7 months</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
