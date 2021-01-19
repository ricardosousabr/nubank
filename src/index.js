import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Pix from './components/Pix';
import Fgts from './components/Fgts';
import Account from './components/Account';
import Card from './components/Card';
import Rewards from './components/Rewards';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Pix />
    <Fgts />
    <Account />
    <Card />
    <Rewards />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
);
