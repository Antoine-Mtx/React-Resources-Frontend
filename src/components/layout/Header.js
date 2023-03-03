import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Dropdown, Button, Image } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';

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
              <Dropdown as={Nav.Item}>
                  <Dropdown.Toggle
                    as={Button}
                    variant="outline-secondary"
                    id="profileDropdown"
                    className="avatar avatar-sm p-0"
                  >
                    <Image
                      className="avatar-img rounded-circle"
                      src={user.avatar}
                      alt="avatar"
                    />
                  </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="shadow pt-3">
                  <Dropdown.Header>Profile info</Dropdown.Header>
                  <Dropdown.Item as={Link} to="/profile">
                    <div className="d-flex align-items-center">
                      <Image
                        className="avatar me-3"
                        src={user.avatar}
                        alt="avatar"
                      />
                      <div>
                        <h6 className="m-0">{user.name}</h6>
                        <p className="small m-0">{user.email}</p>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">
                    <i className="bi bi-person fa-fw me-2" />
                    Edit Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="bi bi-gear fa-fw me-2" />
                    Account Settings
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="bi bi-info-circle fa-fw me-2" />
                    Help
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="bg-danger-soft-hover">
                    <i className="bi bi-power fa-fw me-2" />
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
