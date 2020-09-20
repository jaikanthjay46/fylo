import React from 'react';
import './App.css';
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import SubHero from '../components/Subhero/Subhero';
import Features from '../components/Features/Features';
import Testimonials from '../components/Testimonials/Testimonials';
import Optin from '../components/Optin/Optin';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <SubHero></SubHero>
      <Testimonials></Testimonials>
      <Optin></Optin>
      <Footer></Footer>
    </div>
  );
}

export default App;
