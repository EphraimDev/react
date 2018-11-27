import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Rabbits from '../components/Services/Rabbit';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Rabbits />
        <Footer />
      </div>
    );
  }
}

export default App;
