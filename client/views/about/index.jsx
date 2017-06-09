import React from 'react';
import BaseComponent from '../components/component';
import Header from '../components/header';

export default class About extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>About wooooo</h1>
      </div>
    );
  }
};
