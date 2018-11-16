import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import UpdateOrder from '../components/Products/UpdateOrder';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <UpdateOrder />
        <Footer />
      </div>
    );
  }
}

export default App;
