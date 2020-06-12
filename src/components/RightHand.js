import React from 'react';
import '../App.css';
import FooterMenu from './FooterMenu';

function RightHand(props) {
  return (
    <div className="App-footer">
      {props.count}
    </div>
  );
}

export default RightHand;
