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
          <NavbarBrand href="/"><img className="logo" src={logo} alt="" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav >
                  <div >Crops</div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/banana">Banana Plantation</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/pepper" >Pepper Farming</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/garri" >Garri Production</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/oilpalm" >Oil Palm Production</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/orange" >Orange Farming</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/pawpaw" >Pawpaw Farming</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/plantain" >Plantain Plantation</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav >
                  <div >Animals</div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/snail-rearing">Snail Rearing</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/snail-feed" >Snail Feed Production</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/rabbits" >Rabbit Rearing</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/goats" >Goat Rearing</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/poultry" >Poultry</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/articles">Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
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