// /src/sections/Blog/Blog.jsx
import React from 'react';
import styles from './BlogStyles.module.css';

function Blog() {
  return (
    <section id="blog" className={`${styles.blogSection} container fade-in`}>
      <h2 className="sectionTitle">Our Blog</h2>
      <p className={styles.intro}>
        Dive deeper into German language tips, cultural insights, and success
        stories on our official blog.
      </p>

      <div className={styles.blogGrid}>
        {/* Blog Card #1 */}
        <div className={styles.blogCard}>
          <h3>Blog Post #1</h3>
          <p>Click to explore in-depth German language tips & insights.</p>
          <a
            href="https://germangyan.blogspot.com/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Read More
          </a>
        </div>

        {/* Blog Card #2 */}
        <div className={styles.blogCard}>
          <h3>Blog Post #2</h3>
          <p>Learn about exam prep, speaking sessions, and more!</p>
          <a
            href="https://germangyan.blogspot.com/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Read More
          </a>
        </div>

        {/* Blog Card #3 */}
        <div className={styles.blogCard}>
          <h3>Blog Post #3</h3>
          <p>Success stories, study tips, and cultural notes from Germany.</p>
          <a
            href="https://germangyan.blogspot.com/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
