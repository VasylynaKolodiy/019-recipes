import React from 'react';
import {NavLink} from "react-router-dom";
//_____________________________________________________________________________________
import './Header.scss'
import logoIcon from '../../assets/img/logo.png'
//_____________________________________________________________________________________

const Header = () => {
  return (
    <div className='header'>

      <div className='header__container container'>
        <NavLink className='header__logo' to='/'>
          <img src={logoIcon} title='logo' alt='logo'/>
        </NavLink>

        <nav>
          <NavLink className='hoverLink' to='/alphabet'>Alphabet</NavLink>
          <NavLink className='hoverLink' to='/'>Home</NavLink>
          <NavLink className='hoverLink' to='/'>Home</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;