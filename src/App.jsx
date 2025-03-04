// /src/App.jsx
import React from 'react';
import NavBar from './common/NavBar/NavBar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Courses from './sections/Courses/Courses';
import Resources from './sections/Resources/Resources';
import Testimonials from './sections/Testimonials/Testimonials';
import Blog from './sections/Blog/Blog';
import Internship from './sections/Internship/Internship'; // <-- IMPORT
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <div className="nav-space">
        <Hero />
        <About />
        <Courses />
        <Resources />
        <Testimonials />
        <Blog />
        <Internship />  {/* <-- ADD INTERNSHIP BEFORE CONTACT */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
