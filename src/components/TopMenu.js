import React from 'react';
import '../App.css';
import Logo from './Logo';

function TopMenu(props) {
  return (
    <div className="flex-row">
      <Logo />
      <ul className="flex-row ul-unordered">
        {props.topMenu.map(el => <li key={el}><div className="menuItem"><button className="button-link" onClick={() => props.click(el)}><strong>{el}</strong></button> </div></li>)}
      </ul>
    </div>
  )
}

export default TopMenu;
