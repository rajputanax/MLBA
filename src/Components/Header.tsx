import React from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';

import '../STYLE/Header.css'
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        MLBA
      </div>

     <NavBar />

      <div className="header__actions">
        <Link to='/login' className="btn btn--ghost">Login</Link>
        <Link  to='/signup' className="btn btn--primary">Get Started</Link>
      </div>
    </header>
  );
};

export default Header;
