import React from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/authenticationActions.js';

const ProfileDropdown = ({ user }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Dropdown as="div" className="nav-item ml-3">
      <Dropdown.Toggle
        as={Image}
        src={user.avatar}
        alt="avatar"
        className="avatar avatar-sm rounded-circle"
      />
      <Dropdown.Menu align="right" className="dropdown-menu-card">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="dropdown-header d-flex align-items-center p-3">
            <Image
              className="avatar avatar-sm me-3"
              src={user.avatar}
              alt="avatar"
            />
            <div>
              <h5 className="mb-1">{user.name}</h5>
              <small className="text-muted">{user.email}</small>
            </div>
          </div>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/profile">
            <i className="bi bi-person fa-fw me-2" />
            Mon profil
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/settings">
            <i className="bi bi-gear fa-fw me-2" />
            Paramètres du compte
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => {}}>
            <i className="bi bi-question-circle fa-fw me-2" />
            Aide
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/logout" onClick={handleLogout}>
            <i className="bi bi-box-arrow-left fa-fw me-2" />
            Déconnexion
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
