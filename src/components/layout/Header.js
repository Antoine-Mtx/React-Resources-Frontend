import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';
import ProfileDropdown from './header/ProfileDropdown.js';

const Header = ({ user }) => {
  return (
    <Navbar className="navbar-light navbar-sticky" expand="xl">
      <Container>
        <Link to="/" className="navbar-brand">
          <Image
            className="light-mode-item navbar-brand-item"
            src={logo}
            alt="logo"
          />
          <Image
            className="dark-mode-item navbar-brand-item"
            src={logo}
            alt="logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        {user && (
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="me-auto" />
            <Nav>
              <ProfileDropdown user={user}/>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
