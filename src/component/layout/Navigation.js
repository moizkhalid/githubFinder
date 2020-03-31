import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ icon, title }) => {
  return (
    <div>
      <Navbar expand='lg'>
        <Navbar.Brand>
          <i className={icon} style={{ fontSize: 25 }}></i>
          {title}
        </Navbar.Brand>
        <Nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </Nav>
      </Navbar>
    </div>
  );
};

Navigation.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};
Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navigation;
