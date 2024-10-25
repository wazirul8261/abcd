import React, { Component, Fragment } from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import mLogo from '../../asset/image/q.png';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[mLogo],
            navBarBack:"navBackGround",
            navBarItem:"navItem"
        }
    }
    render() {
        return (
            <Fragment>
         <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" >
         <Navbar.Brand className={this.state.navBarTitle}><img src= {this.state.navBarLogo}/>  Wazirul Islam</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           </Nav>
          <Nav>
            <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
            <Nav.Link className={this.state.navBarItem} href="#deets">SERVICES</Nav.Link>
            <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
            <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
            <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
                
            </Fragment>
        );
    }
}

export default TopNavigation;