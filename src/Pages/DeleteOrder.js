import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import DeleteOrder from '../components/Products/DeleteOrder';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <DeleteOrder />
        <Footer />
      </div>
    );
  }
}

export default App;
