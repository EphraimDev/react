import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Goats from '../components/Services/Goats';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Goats />
        <Footer />
      </div>
    );
  }
}

export default App;
