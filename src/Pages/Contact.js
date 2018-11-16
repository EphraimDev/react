import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Form from '../components/ContactForm';
import Footer from '../components/Footer';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
