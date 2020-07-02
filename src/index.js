import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
