import React from 'react';
import '../App.css';
import FooterMenu from './FooterMenu';

function Footer(props) {
const change = (e)=> props.attempt(e.target.value)

  return (
    <div className="App-footer">
      <FooterMenu footerMenu={props.footerMenu} />
      <input type="text" onChange={change}></input>
    </div>
  );
}

export default Footer;
