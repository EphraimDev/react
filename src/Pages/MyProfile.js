import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import MyProfile from '../components/MyProfile';
import Footer from '../components/Footer';
import Preload from '../components/Preloader';


class App extends Component {


  render() {
    return (
      <div>
        <Preload />
        <Header />
        <MyProfile />
        <Footer />
      </div>
    );
  }
}

export default App;
