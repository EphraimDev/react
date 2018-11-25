import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Crops from '../components/Crops/';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Crops />
        <Footer />
      </div>
    );
  }
}

export default App;
