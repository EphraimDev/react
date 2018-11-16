import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Banana from '../components/Services/Banana';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Banana />
        <Footer />
      </div>
    );
  }
}

export default App;
