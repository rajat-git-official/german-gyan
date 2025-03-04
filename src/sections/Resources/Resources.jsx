// /src/sections/Resources/Resources.jsx
import React from 'react';
import styles from './ResourcesStyles.module.css';

function Resources() {
  return (
    <section id="resources" className={`${styles.resourcesSection} container fade-in`}>
      <h2 className="sectionTitle">Free Learning Resources</h2>
      <p className={styles.intro}>
        We believe in making learning resources easily accessible for all.
        Along with our structured courses, explore a variety of free materials
        to support your German language journey.
      </p>

      <div className={styles.resourceLinks}>
        <div className={styles.resourceCard}>
          <h4>YouTube Channel</h4>
          <p>
            Free German lessons, grammar tips, and more.
          </p>
          <a
            href="https://www.youtube.com/c/GermanGyan"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Visit YouTube
          </a>
        </div>

        <div className={styles.resourceCard}>
          <h4>Spotify</h4>
          <p>
            Listen to pronunciation guides and speaking exercises anywhere.
          </p>
          <a
            href="https://open.spotify.com/show/2fxS8DOBaRhWyepyOYHl6b"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Listen on Spotify
          </a>
        </div>

        <div className={styles.resourceCard}>
          <h4>Instagram</h4>
          <p>
            Daily vocabulary tips, quick lessons, and more.
          </p>
          <a
            href="https://www.instagram.com/germangyan1/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      <h3 className={styles.subtitle}>Free Weekend Speaking Sessions</h3>
      <p className={styles.details}>
        Join us for 1-hour free speaking sessions every weekend to boost your
        fluency, improve confidence, and speak German like a pro!
      </p>
    </section>
  );
}

export default Resources;
