import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Orange from '../components/Services/Orange';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Orange />
        <Footer />
      </div>
    );
  }
}

export default App;
