import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import Cards from '../components/Cards';
import Features from '../components/AdditionalFeatures';
import Socials from '../components/Socials/SocialMedia';
import Footer from '../components/Footer';


class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Cards />
        <hr className="homepage-hr" />
        <Features />
        <hr className="homepage-hr" />
        <Socials />
        <Footer />
      </div>
    );
  }
}

export default App;
