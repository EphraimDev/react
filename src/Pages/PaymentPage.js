import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import PaymentPage from '../components/Payments/PaymentPage';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <PaymentPage />
        <Footer />
      </div>
    );
  }
}

export default App;
