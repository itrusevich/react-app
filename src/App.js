import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';

function App() {
  const appVersion = '0.2.32';
  const topMenu = ['About', 'Prices', 'Products', 'Services'];
  const footerMenu = ['Careers', 'Contact us', 'Return Policy', 'Shipping', 'FAQ']

  const fisher = (fish) => {
    console.log('Pull ' + fish)
  }

  const click = (menuItem) => {
    alert(menuItem);
  }

  return (
    <div className="App">
      <Header version={appVersion} topMenu={topMenu} click = {click}/>
      <Content />
      <Footer footerMenu={footerMenu} attempt={fisher}/>
    </div>
  );
}

export default App;
