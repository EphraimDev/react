import React, { Component } from 'react';

import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Write from '../components/Articles/WriteArticle';


class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <Write />
        <Footer />
      </div>
    );
  }
}

export default App;
