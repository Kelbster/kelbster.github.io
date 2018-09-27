import React from 'react';
import { AppStyled } from './index-styles';
import Banner from '../components/banner';
import Hero from '../components/hero';
import CurrentWork from '../current-work';
import Wip from '../wip';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppStyled>
        <Banner />
        <Hero />
        <CurrentWork />
        <Wip />
      </AppStyled>
    );
  }
};
