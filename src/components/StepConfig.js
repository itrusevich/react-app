import React from 'react';
import '../App.css';
import FooterMenu from './FooterMenu';

function StepConfig(props) {
  return (
    <div className="App-footer">
      <input onChange={(e) => props.onStepChange(+e.target.value)}
      value={props.step}>

      </input>
    </div>
  );
}

export default StepConfig;
