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
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isNavBar: false,
      userId: localStorage.getItem('current-user-id')
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    }, ()=> {
        let element = document.getElementsByClassName('classy-menu');
        if(this.state.isOpen === true) {
            element[0].classList.add('menu-on')
        } else {
            element[0].classList.remove('menu-on')
        }
    });
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
    let urlEdit = `/edit-profile`;

    return (
        <div className="sticky-wrapper" id="sticky-wrapper" style={{height: "90px"}}>
            <div className="alazea-main-menu">
        <div className="classy-nav-container">
            <div className="container">
            <Navbar className="classy-navbar justify-content-between" id="alazeaNav" light expand="md">
          <NavbarBrand className="nav-brand" href="/"><img src="../img/bg-img/wizzy_logod.jpg" alt="" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        
          </NavbarToggler>
          <Collapse id="navbar-collapse" isOpen={this.state.isOpen} navbar>
          <div className="classy-menu">
          <div className="classycloseIcon" onClick={this.toggle}>
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>
            <div className="classynav">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  Services
                </DropdownToggle>
                <DropdownMenu right>
                  <ul>
                    <li><a href="/crop production">Crop Production</a></li>
                    <li><a href="/rearing of animals">Rearing of Animals</a></li>
                  </ul>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/articles">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="logged-in" >
                <DropdownToggle nav >
                  <div ><i className="fa fa-user"></i></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <ul>
                    <li><a href={urlProfile}>Profile</a></li>
                    <li><a href={urlEdit}>Edit Profile</a></li>
                    <li><a href="/donations" >Donate</a></li>
                    <hr/>
                    <li><a href="/" onClick={() => this.onSubmit()}>Sign Out</a></li>
                  </ul>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar className="admin" >
                <DropdownToggle nav >
                  <div ><i className="fa fa-user"></i></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <ul>
                    <li><a href="/admin">Profile</a></li>
                    <hr/>
                    <li><a href="/" onClick={() => this.onSubmit()}>Sign Out</a></li>
                  </ul>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            </div>
          
          </div>
            
          </Collapse>
        </Navbar>
            </div>
        </div>
        
      </div>
        </div>
      
    );
  }
}