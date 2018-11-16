import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';


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
