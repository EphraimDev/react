import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Pawpaw from '../components/Services/Pawpaw';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Pawpaw />
        <Footer />
      </div>
    );
  }
}

export default App;
