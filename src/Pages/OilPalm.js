import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import OilPalm from '../components/Services/OilPalm';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <OilPalm />
        <Footer />
      </div>
    );
  }
}

export default App;
