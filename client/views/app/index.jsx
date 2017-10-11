import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Banner from '../components/banner';
import Hero from '../components/hero';
import CurrentWork from '../components/current-work';
import Weather from '../components/weather';
import Farm from '../components/farm';
require('./index.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-component">
        <Banner />
        <Hero />
        <CurrentWork />
        <div className="section tools">
          <Grid>
            <Row>
              <Col sm={ 12 }>
                <h1>Some of my favorite tools:</h1>
                <p><span className="pre">/// HACK:</span></p>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="section work-in-progress">
          <Grid>
            <Row>
              <Col sm={ 12 }>
                <h1>Work in progress</h1>
                <p>A sneak peek of some of the things I'm currently working on</p>
                <p style={{ color: '#ff5353' }}>WARNING: Incomplete projects or features ahead.</p>
              </Col>
            </Row>
          </Grid>
          <Weather />
          <Farm />
        </div>
      </div>
    );
  }
};
