import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import SnailRearing from '../components/Services/SnailRearing';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <SnailRearing />
        <Footer />
      </div>
    );
  }
}

export default App;
