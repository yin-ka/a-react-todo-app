import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const links = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' },
  { path: '/profile', text: 'Profile' },
  { path: '/login', text: 'Login' },
];

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderNavLinks = () => links.map((link) => {
    if (link.path === '/login' && !user) {
      return (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      );
    } if (link.path === '/profile' && user) {
      return (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      );
    }
    return (
      <li key={link.text}>
        <NavLink to={link.path}>{link.text}</NavLink>
      </li>
    );
  });

  return (
    <>
      <nav className="navbar">
        <ul>
          {renderNavLinks()}
          {!user && (
            <li className="log-in">
              <span>Log in to edit to-dos</span>
            </li>
          )}
        </ul>
      </nav>
      {user && (
        <div className="logout">
          <p>{user}</p>
          <button type="submit" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
