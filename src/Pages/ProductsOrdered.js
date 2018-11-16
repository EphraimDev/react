import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import ProductsOrdered from '../components/Profile/ProduceOrdered';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <ProductsOrdered />
        <Footer />
      </div>
    );
  }
}

export default App;
