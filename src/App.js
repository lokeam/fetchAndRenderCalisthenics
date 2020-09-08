import React from 'react';
import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

/*------ Constants ------*/

/*------ Services ------*/

/*------ Hooks ------*/

/*------ Single Component ------*/
function App() {
  return (
    <div className="App">
      <nav className="fetch-app__nav">
        <div className="fetch-app__version-logo">
          <img className="fetch-app__version-logo-img" src={logo} alt="javascript logo" />
        </div>
        <div className="fetch-app__title">Fetch &amp; Render Calisthenics</div>
      </nav>
    </div>
  );
}

export default App;
