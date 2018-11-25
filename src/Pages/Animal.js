import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Animals from '../components/Animals';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Animals />
        <Footer />
      </div>
    );
  }
}

export default App;
