import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Navbar from './components/Navbar.jsx';
import Homepage from './components/Homepage.jsx';
import { BrowserRouter } from 'react-router-dom';

import './main.scss'
import './card.scss'
import './fav.scss'


ReactDOM.render(
    <App />,
  document.getElementById('root')
);