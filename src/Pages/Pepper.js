import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Pepper from '../components/Services/Pepper';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Pepper />
        <Footer />
      </div>
    );
  }
}

export default App;
