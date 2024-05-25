// pages/index.js
import React from 'react';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className='px-10'>
      <div id="home">
        <Header />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
