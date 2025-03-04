// /src/common/NavBar/NavBar.jsx
import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { useTheme } from '../ThemeContext';

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      setMenuOpen(false); // close the mobile nav
      window.scrollTo({
        top: elem.offsetTop - 70, // offset for the fixed navbar
        behavior: 'smooth',
      });
    }
  };

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>German Gyan</div>

      {/* Hamburger Icon (mobile) */}
      <div className={styles.hamburger} onClick={handleMenuToggle}>
        <div />
        <div />
        <div />
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.navActive : ''}`}>
        <li>
          <a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>
            About
          </a>
        </li>
        <li>
          <a href="#courses" onClick={(e) => handleSmoothScroll(e, 'courses')}>
            Courses
          </a>
        </li>
        <li>
          <a
            href="#resources"
            onClick={(e) => handleSmoothScroll(e, 'resources')}
          >
            Resources
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            onClick={(e) => handleSmoothScroll(e, 'testimonials')}
          >
            Testimonials
          </a>
        </li>
        <li>
          <a href="#blog" onClick={(e) => handleSmoothScroll(e, 'blog')}>
            Blog
          </a>
        </li>
        {/* New Internship link */}
        <li>
          <a
            href="#internship"
            onClick={(e) => handleSmoothScroll(e, 'internship')}
          >
            Internship
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
            Contact
          </a>
        </li>
        <li>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
