import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import About from '../components/AboutPage';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
