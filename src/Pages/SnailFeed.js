import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import SnailFeed from '../components/Services/Snail Feed';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <SnailFeed />
        <Footer />
      </div>
    );
  }
}

export default App;
