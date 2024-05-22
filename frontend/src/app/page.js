import React from 'react';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className='px-10'>
      <Header/>
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
