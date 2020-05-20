import React from 'react';
import './App.css';
import Logo from './Logo';

function TopMenu(props) {
  return (
    <div className="flexRow">
      <div> <Logo /> </div>
      <ul className="flexRow">
        {props.topMenu.map(el => <li key={el}><div className="menuItem"><a href={el} className="App-link link-not-underlined" onClick={()=> props.click(el)}><strong>{el}</strong></a> </div></li>)}
      </ul>
    </div>
  )
}

export default TopMenu;
