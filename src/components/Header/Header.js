import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo from '../../logo/w.png';
import icon from '../../icons/profile.png';
import './Header.css';

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
    if(localStorage.getItem('email') === 'admin@wizzyagro.com' ) {
       document.querySelector('.logged-in').style.display = 'none';
       document.querySelector('.not-logged-in').style.display='none';
       document.querySelector('.not-logged').style.display='none'
    }
    
    else if(!localStorage.getItem('x-access-token')) {
      document.querySelector('.logged-in').style.display='none';
      document.querySelector('.admin').style.display='none';
    } else{
      document.querySelector('.not-logged-in').style.display='none';
      document.querySelector('.not-logged').style.display='none';
      document.querySelector('.admin').style.display='none';
    }
  }
  
  onSubmit() {
      localStorage.removeItem('x-access-token');
      localStorage.removeItem('current-user-id');
      localStorage.removeItem('firstname');
      localStorage.removeItem('lastname');
      localStorage.removeItem('email');
  }
  
  render() {
    let userId = this.state.userId;
    let urlProfile = `/user/${userId}`;
    let urlEdit = `/edit-profile`
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/"><a className="company-logo" href="/">COMPANY LOGO</a>/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/articles">Articles</NavLink>
              </NavItem>
              <NavItem className="not-logged" >
                <NavLink href="/login" >Login</NavLink>
              </NavItem>
              <NavItem className="not-logged-in">
                <NavLink href="/register" >Register</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="logged-in" >
                <DropdownToggle nav >
                  <div ><img className="header-profile-icon" src={icon} alt="" /></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href={urlProfile}>Profile</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href={urlEdit}>Edit Profile</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/donations" >Donate</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/" onClick={() => this.onSubmit()}>Sign Out</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar className="admin" >
                <DropdownToggle nav >
                  <div ><img className="header-profile-icon" src={icon} alt="" /></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/admin">Profile</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/" onClick={() => this.onSubmit()}>Sign Out</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}