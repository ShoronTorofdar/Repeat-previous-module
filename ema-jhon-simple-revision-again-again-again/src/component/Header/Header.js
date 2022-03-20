import React from 'react';
import logo from '../../images/logo.png';
import'./Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="" />
      <nav>
        <a href="./shop">Home</a>
        <a href="./shop">About</a>
        <a href="./shop">Contact</a>
      </nav>
    </div>
  );
};

export default Header;