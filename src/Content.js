import React from 'react';
import './App.css';

function Content() {
  return (
    <div className="App-content">
      <h1>Content</h1>
      <div className="flexRow">
        <div className="menuItem">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="menuItem middle">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
        </div>
        <div className="menuItem">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
