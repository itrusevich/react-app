import React from 'react';
import '../App.css';

function FooterMenu(props) {
  return (
    <div className="flex-row">
      <ul className="flex-row ul-unordered" >
        {props.footerMenu.map(el => <li key={el}><div className="menuItem"> {el} </div></li>)}
      </ul>
    </div>
  )
}

export default FooterMenu;
