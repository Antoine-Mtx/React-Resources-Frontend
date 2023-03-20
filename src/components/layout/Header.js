import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import ProfileDropdown from './header/ProfileDropdown.js';

const Header = ({ user }) => {
  return (
    <Navbar className="navbar-light navbar-sticky p-3" expand="lg">
      <Navbar.Brand>
        <Image
          className="navbar-brand-item img-80"
          src={logo}
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="me-auto">
          <Nav.Item>
            <Link to="/resources" className="nav-link">
              Ressources
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/categories" className="nav-link">
              Catégories
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      {user && (
        <Navbar.ProfileDropdown>
          <ProfileDropdown user={user}/>
        </Navbar.ProfileDropdown>
      )}
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
