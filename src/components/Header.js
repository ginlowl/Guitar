import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
          <a>T's Guitar</a>
          <p>official website</p>
        </div>
        <ul className='header-list'>
          <li>Guitar</li>
          <li>Effecter</li>
          <li>Other</li>
        </ul>
      </div>
    );
  }
}

export default Header;