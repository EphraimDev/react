import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Garri from '../components/Services/Garri';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Garri />
        <Footer />
      </div>
    );
  }
}

export default App;
