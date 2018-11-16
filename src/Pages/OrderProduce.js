import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import NewOrder from '../components/Products/NewOrder';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <NewOrder />
        <Footer />
      </div>
    );
  }
}

export default App;
