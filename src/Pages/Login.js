import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Login from '../components/Login/index';
import Preload from '../components/Preloader';


class App extends Component { 


  render() {
    return (
      <div>
        <Preload />
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
