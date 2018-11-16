import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import UpdateArticle from '../components/Articles/UpdateArticle';


class App extends Component { 


  render() {
    return (
      <div>
        <Header />
        <UpdateArticle />
        <Footer />
      </div>
    );
  }
}

export default App;
