import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Banana from './Pages/Banana';
import Pepper from './Pages/Pepper';
import Garri from './Pages/Garri';
import OilPalm from './Pages/OilPalm';
import Orange from './Pages/Orange';
import Pawpaw from './Pages/Pawpaw';
import Plantain from './Pages/Plantain';
import SnailRearing from './Pages/SnailRearing';
import SnailFeed from './Pages/SnailFeed';
import Training from './Pages/Training';
import Investors from './Pages/Investors';
import Profile from './Pages/ProfilePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Verify from './Pages/Verify';
import MyProfile from './Pages/MyProfile';
import AdminProfile from './Pages/AdminProfile';
import WriteArticle from './Pages/WriteArticle';
import Articles from './Pages/Articles';
import Article from './Pages/GetArticle';
import UpdateArticle from './Pages/UpdateArticle';
import NewOrder from './Pages/OrderProduce';
import UpdateOrder from './Pages/UpdateOrder';
import DeleteOrder from './Pages/DeleteOrder';
import ConfirmOrder from './Pages/ConfirmOrder';
import Crops from './Pages/Crop';
import Animals from './Pages/Animal';
import Consultancy from './Pages/Consultancy';
import Rabbits from './Pages/Rabbits';
import Goats from './Pages/Goats';
import Paystack from './Pages/PaymentPage';

class App extends Component {

  componentDidMount() {
    // When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyHeader()};

// Get the header
var header = document.getElementsByClassName("sticky-wrapper");

// Get the offset position of the navbar
var sticky = header[0].offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header[0].classList.add("is-sticky");
  } else {
    header[0].classList.remove("is-sticky");
  }
}
  }

  render() {
    return (
      
      <BrowserRouter>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/banana" component={Banana} />
          <Route path="/pepper" component={Pepper} />
          <Route path="/garri" component={Garri} />
          <Route path="/oil-palm" component={OilPalm} />
          <Route path="/orange" component={Orange} />
          <Route path="/pawpaw" component={Pawpaw} />
          <Route path="/plantain" component={Plantain} />
          <Route path="/snail rearing" component={SnailRearing} />
          <Route path="/snail feed" component={SnailFeed} />
          <Route path="/training-and-consultancy" component={Training} />
          <Route path="/investment-opportunity" component={Investors} />
          <Route path="/user/:userId" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/verify-user" component={Verify} />
          <Route path="/edit-profile" component={MyProfile} />
          <Route path="/admin" component={AdminProfile} />
          <Route path="/post-article" component={WriteArticle} />
          <Route path="/articles" component={Articles} />
          <Route path="/article/:title" component={Article} />
          <Route path="/update/:title" component={UpdateArticle} />
          <Route path="/:userId/order-a-product" component={NewOrder} />
          <Route path="/:orderId/update" component={UpdateOrder} />
          <Route path="/:orderId/delete" component={DeleteOrder} />
          <Route path="/confirm-order" component={ConfirmOrder} />
          <Route path="/crops" component={Crops} />
          <Route path="/rearing of animals" component={Animals} />
          <Route path="/training and consultancy" component={Consultancy} />
          <Route path="/goat rearing" component={Goats} />
          <Route path="/rabbit" component={Rabbits} />
          <Route path="/paystack" component={Paystack} />
        </Fragment>
      </BrowserRouter>
      
    );
  }
}

export default App;
