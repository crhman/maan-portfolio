import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Service from './components/service/Service';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/footer';
// import About from './components/about/about';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
};


export default App;
