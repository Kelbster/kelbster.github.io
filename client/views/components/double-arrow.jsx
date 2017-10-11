import React from 'react';
import iconArrowDown from './img/icon-arrow-down.svg';
require('./double-arrow.scss');

const DoubleArrow = () => (
  <div className="double-arrow-component">
    <img className="icon-arrow-down" src={ iconArrowDown } alt="arrow" />
    <img className="icon-arrow-down" src={ iconArrowDown } alt="arrow" />
  </div>
);

export default DoubleArrow;
