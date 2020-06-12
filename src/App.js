import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import LeftHand from './components/LeftHand';
import RightHand from './components/RightHand';
import StepConfig from './components/StepConfig';

function App() {
  const appVersion = '0.2.32';
  const topMenu = ['About', 'Prices', 'Products', 'Services'];
  const footerMenu = ['Careers', 'Contact us', 'Return Policy', 'Shipping', 'FAQ']

  const fisher = (fish) => {
    console.log('Pull ' + fish)
  }

  const click = (menuItem) => {
    console.log(menuItem);
  }

  const [count, setCount] = useState(15);
  const [step, setStep] = useState(2);

  const handler = (value) => {
    setCount(value);
  }

  const onStepChange = (value) => {
    setStep(value);
  }

  return (
    <div className="App">
      <Header version={appVersion} topMenu={topMenu} click={click} />
      <LeftHand count={count}
                changeCount={handler} 
                step={step} />
      <RightHand count={count} />
      <StepConfig step={step} onStepChange={onStepChange} />
      <Footer footerMenu={footerMenu} attempt={fisher} />
    </div>
  );
}

export default App;
