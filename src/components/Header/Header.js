import React from 'react';
import TopHeaderArea from '../TopHeaderArea';
import NavbarArea from '../NavbarArea';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      userId: localStorage.getItem('current-user-id')
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  
  componentDidMount() {
    let token = localStorage.getItem('x-access-token');
    let login = document.getElementById('login-top-header-area');

    if(token) {
        login.classList.remove('d-flex');
        login.style.display = 'none'
    }
    if(localStorage.getItem('email') === 'admin@wizzyagro.com' ) {
      document.querySelector('.logged-in').style.display = 'none';
   }
   
   else if(!localStorage.getItem('x-access-token')) {
     document.querySelector('.logged-in').style.display='none';
     document.querySelector('.admin').style.display='none';
   } else{
     document.querySelector('.admin').style.display='none';
   }
  } 
  
  render() {
    return (
      <header className="header-area">
        <TopHeaderArea />
        <NavbarArea />
      </header>
    );
  }
}