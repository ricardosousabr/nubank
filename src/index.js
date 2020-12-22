import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Pix from './components/Pix'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Pix />
  </React.StrictMode>,
  document.getElementById('root')
);
