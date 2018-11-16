import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Investors from '../components/Services/Investors';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Investors />
        <Footer />
      </div>
    );
  }
}

export default App;
