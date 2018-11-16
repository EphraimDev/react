import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Profile from '../components/Admin/Profile';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default App;
