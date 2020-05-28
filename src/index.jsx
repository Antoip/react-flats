import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app';

import flats from '../data/flats';

const root = document.getElementById('root');
ReactDOM.render(<App flats={flats} />, root);
