import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Register from '../components/Register/index';
import Preload from '../components/Preloader';


class App extends Component {


  render() {
    return (
      <div>
        <Preload />
        <Header />
        <Register />
        <Footer />
      </div>
    );
  }
}

export default App;
