import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to='/'>Streamy</Link>
      <div>
        <Link to='/'>All Streams</Link>
      </div>
    </div>
  );
}

export default Header;
