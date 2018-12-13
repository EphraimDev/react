import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Profile from '../components/Admin/Profile';
import Preload from '../components/Preloader';


class App extends Component { 


  render() {
    return (
      <div>
        <Preload />
        <Header />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default App;
