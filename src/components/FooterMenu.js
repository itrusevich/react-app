import React from 'react';
import '../App.css';

function FooterMenu(props) {
  return (
    <div className="flexRow">
      <ul className="flexRow ulUnordered" >
        {props.footerMenu.map(el => <li key={el}><div className="menuItem"> {el} </div></li>)}
      </ul>
    </div>
  )
}

export default FooterMenu;
