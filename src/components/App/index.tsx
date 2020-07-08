import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../Topbar';
import Footer from '../Footer';
import Routes from '../../routes';

import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
