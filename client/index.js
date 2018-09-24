import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app';
require('normalize.css');
require('./styles/styles.css');
require('./sass/base.scss');

ReactDOM.render(<App />, document.getElementById('root'));
