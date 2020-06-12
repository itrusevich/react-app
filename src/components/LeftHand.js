import React from 'react';
import '../App.css';
import FooterMenu from './FooterMenu';

function LeftHand(props) {
  const clickPlus = () => {
    props.changeCount(props.count + props.step);
  }

  const clickMinus = () => {
    props.changeCount(props.count - props.step);
  }

  return (
    <div>
      <button onClick={clickPlus}>+</button>
      <button onClick={clickMinus}>-</button>
    </div>
  );
}

export default LeftHand;
