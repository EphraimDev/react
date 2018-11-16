import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Article from '../components/Articles/GetAnRticle';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
