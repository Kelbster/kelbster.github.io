import React from 'react';
import BaseComponent from '../components/component';
import { Link } from 'react-router-dom';
require('./header.scss');
const logoUrl = require('./img/lgfit-logo.png');

export default class Header extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-component">
        <ul className="nav">
          <li><Link to="/">KELBY</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
};
