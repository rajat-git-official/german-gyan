// /src/sections/Internship/Internship.jsx
import React from 'react';
import styles from './InternshipStyles.module.css';

function Internship() {
  return (
    <section id="internship" className={`${styles.internshipSection} container fade-in`}>
      <h2 className="sectionTitle">Internship Opportunities</h2>
      <p className={styles.description}>
        We’re excited to open our doors for talented individuals looking to grow
        their skills. If you’re passionate about language education, technology,
        or community building, we’d love to hear from you!
      </p>

      <div className={styles.applyBox}>
        <h3>Ready to Join Us?</h3>
        <p>
          Click the button below to apply via WhatsApp. We look forward
          to having you on our team!
        </p>
        <a
          href="https://wa.me/919643430783?text=Hello%2C%20I%27m%20interested%20in%20the%20Internship%20opportunity%20at%20German%20Gyan."
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Apply via WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Internship;
