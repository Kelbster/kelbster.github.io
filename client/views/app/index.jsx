import React from 'react';
import { AppStyled } from './index-styles';
import Banner from '../components/banner';
import Hero from '../components/hero';
import RecentWork from '../recent-work';
import Wip from '../wip';
import Footer from '../components/footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppStyled>
        <Banner />
        <Hero />
        <RecentWork />
        <Wip />
        <Footer />
      </AppStyled>
    );
  }
}
