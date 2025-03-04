// /src/sections/Testimonials/Testimonials.jsx
import React from 'react';
import styles from './TestimonialsStyles.module.css';

function Testimonials() {
  return (
    <section
      id="testimonials"
      className={`${styles.testimonialsSection} container fade-in`}
    >
      <h2 className="sectionTitle">Student Testimonials & Success Stories</h2>

      <div className={styles.testimonialGrid}>
        <div className={styles.testimonialCard}>
          <p>
            “Thanks to German Gyan, I was able to improve my fluency in
            German and I recently secured a job in Germany!”
          </p>
          <span>— Rina Sharma</span>
        </div>

        <div className={styles.testimonialCard}>
          <p>
            “The structured lessons and regular speaking sessions helped me gain
            confidence in speaking German. I'm now ready for my B2 exam!”
          </p>
          <span>— Akash Verma</span>
        </div>

        <div className={styles.testimonialCard}>
          <p>
            “German Gyan made learning German enjoyable and practical. I could
            practice real-world conversations, which gave me the confidence to
            speak German at work!”
          </p>
          <span>— Rohit Singh</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
