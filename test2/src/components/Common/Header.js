import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>top</Link></li>
          <li><Link to='/test1'>test1</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
