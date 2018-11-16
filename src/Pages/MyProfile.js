import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import MyProfile from '../components/MyProfile';
import Footer from '../components/Footer';


class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <MyProfile />
        <Footer />
      </div>
    );
  }
}

export default App;
