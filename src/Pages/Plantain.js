import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Plantain from '../components/Services/Plantain';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Plantain />
        <Footer />
      </div>
    );
  }
}

export default App;
