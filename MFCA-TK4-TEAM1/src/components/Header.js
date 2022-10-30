import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          List Mahasiswa
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Data Mahasiswa
        </NavLink>
      </div>
    </header>
  );
};

export default Header;