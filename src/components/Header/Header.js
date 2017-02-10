import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const Links = () =>
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/marketplace">marketplace</Link>
//   </nav>;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.signinToggle = this.signinToggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  signinToggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <header>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/" style={{ color: '#d85f5f' }}>&#9774; Todo&Wish</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/marketplace">Marketplace</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.signinToggle}>Log In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.signinToggle}>
          <ModalHeader toggle={this.signinToggle}>Log in</ModalHeader>
          <ModalBody>
            <form>
              <div>Log in</div>
              <div>Password</div>
              <div>remember</div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.signinToggle}>Log in</Button>
          </ModalFooter>
        </Modal>
      </header>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

export default Header;
