import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import HomeDelivery from '../components/Services/Home Delivery';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <HomeDelivery />
        <Footer />
      </div>
    );
  }
}

export default App;
