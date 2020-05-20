import React from 'react';
import './App.css';
import Logo from './Logo';

function TopMenu(props) {
  return (
    <div className="flexRow">
      <div> <Logo /> </div>
      <ul className="flexRow">
        {props.topMenu.map(el => <li key={el}><div className="menuItem App-link"><strong>{el}</strong> </div></li>)}
      </ul>
    </div>
  )
}

export default TopMenu;
