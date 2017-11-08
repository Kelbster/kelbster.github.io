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
        <div className="work-in-progress-component">
          <div className="container work-in-progress-container">
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
        <div className="container description-container">
          <Grid fluid>
            <Row>
              <Col xs={ 10 } xsOffset={ 1 } sm={ 12 } smOffset={ 0 }>
                <p><span className="description">Description:</span> The world could always use another <a href="https://github.com/Kelbster/the-weather" target="_blank">weather app...</a> This one features unique backgrounds, icons, and wind direction based on your current, local weather.</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <Weather />
        <div className="container description-container">
          <Grid fluid>
            <Row>
              <Col xs={ 10 } xsOffset={ 1 } sm={ 12 } smOffset={ 0 }>
                <p><span className="description">Description:</span> This is the start of a <a href="https://github.com/Kelbster/turnip-for-what" target="_blank">farming game</a> I'm building in React.</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <Farm />
      </div>
    );
  }
};
