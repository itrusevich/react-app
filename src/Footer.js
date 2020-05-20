import React from 'react';
import './App.css';
import FooterMenu from './FooterMenu';

function Footer(props) {
  return (
    <div className="App-footer">
      <FooterMenu footerMenu={props.footerMenu} />
    </div>
  );
}

export default Footer;
