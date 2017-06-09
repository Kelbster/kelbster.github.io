import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './controllers/routes';
require('normalize.css');
require('./sass/base.scss');

ReactDOM.render(Routes, document.getElementById('root'));
