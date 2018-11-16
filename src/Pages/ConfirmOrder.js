import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Pay from '../components/Payments/ConfirmOrder';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Pay />
        <Footer />
      </div>
    );
  }
}

export default App;
