import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Register from '../components/Register';


class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <Register />
        <Footer />
      </div>
    );
  }
}

export default App;
