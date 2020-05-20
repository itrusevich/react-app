import React from 'react';
import './App.css';
import TopMenu from './TopMenu';

function Header(props) {
  return (
    <div className="App-header">
      <TopMenu topMenu={props.topMenu} click={props.click} />
    </div>
  )
}

export default Header;
