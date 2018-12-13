import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import About from '../components/About';
import Investment from '../components/Investment';
import Blog from '../components/Blog';
import NewsLetter from '../components/NewsLetter';
import ContactHomePage from '../components/ContactHomePage';
import Preload from '../components/Preloader';

class App extends Component {


  render() {
    return (
      <div>
        <Preload />
        <Header />
        <Carousel />
        <ServiceSection />
        <About />
        <Investment />
        <Blog />
        <NewsLetter />
        <ContactHomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
