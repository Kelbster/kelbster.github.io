import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Banner from '../components/banner';
import Hero from '../components/hero';
import CurrentWork from '../components/current-work';
import Weather from '../components/weather';
import Farm from '../components/farm';
require('normalize.css');
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
        {/* <Broadcast /> */}
        <div className="work-in-progress-component">
          <div className="work-in-progress-container">
            <Grid fluid>
              <Row>
                <Col xs={ 10 } xsOffset={ 1 } sm={ 12 } smOffset={ 0 }>
                  <div className="copy">
                    <h1>Work in progress</h1>
                    <p>A sneak peek of some of the things I'm currently working on</p>
                    <div className="warning">
                      <h3>WARNING</h3>
                      <p>Incomplete projects or features ahead</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
        <Weather />
        <Farm />
      </div>
    );
  }
};
