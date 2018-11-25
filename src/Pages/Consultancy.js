import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Consultancy from '../components/Consultancy';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Consultancy />
        <Footer />
      </div>
    );
  }
}

export default App;