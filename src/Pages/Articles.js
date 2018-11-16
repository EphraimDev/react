import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Articles from '../components/Articles/GetAllArticles';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
