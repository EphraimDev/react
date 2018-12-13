import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import GetArticle from '../components/Articles/GetAnRticle';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <GetArticle />
        <Footer />
      </div>
    );
  }
}

export default App;
