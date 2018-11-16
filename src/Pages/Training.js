import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Training from '../components/Services/Training';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Training />
        <Footer />
      </div>
    );
  }
}

export default App;
