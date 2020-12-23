import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Pix from './components/Pix'
import Fgts from './components/Fgts'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Pix />
    <Fgts />
  </React.StrictMode>,
  document.getElementById('root')
);
