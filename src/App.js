import React from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

function App() {
  const appVersion = '0.2.32';
  const topMenu = ['About', 'Prices', 'Products', 'Services'];
  const footerMenu = ['Careers', 'Contact us', 'Return Policy', 'Shipping', 'FAQ']


  const click = (menuItem) => {
    alert(menuItem);
  }

  return (
    <div className="App">
      <Header version={appVersion} topMenu={topMenu} click = {click}/>
      <Content />
      <Footer footerMenu={footerMenu} />
    </div>
  );
}

export default App;
