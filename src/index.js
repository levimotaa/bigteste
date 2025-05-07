import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; 

ReactDOM.render(
  <Router basename="/bigteste">
    <App />
  </Router>,
  document.getElementById('root')
);