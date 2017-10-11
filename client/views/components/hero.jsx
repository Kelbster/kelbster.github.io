import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import moment from 'moment';
import DoubleArrow from './double-arrow';
import iconError from './img/icon-error.svg';
require('./hero.scss');

const startDate = '2012-01-09T09:00:00-04:00';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latency: null,
      bandwidth: null,
      pressure: null
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.getCurrentTime();
      this.getRandomLatency();
      this.getRandomBandwidth();
      this.getRandomPressure();
    }, 250);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  getCurrentTime() {
    this.setState({ currentTime: moment().format() });
  }

  getRandomLatency() {
    const rnd = Math.round(Math.random() * (60 - 40) + 40);
    this.setState({ latency: rnd });
  }

  getRandomBandwidth() {
    const rnd = Math.round(Math.random() * (300 - 290) + 290);
    this.setState({ bandwidth: rnd });
  }

  getRandomPressure() {
    const rnd = (Math.random() * (101.325 - 101) + 101).toFixed(3);
    this.setState({ pressure: rnd });
  }

  getExperience() {
    return Math.abs(moment(startDate).diff(this.state.currentTime, 'years'));
  }

  getCoffeeOz() {
    const coffeeTime = Math.abs(moment(startDate).diff(this.state.currentTime, 'seconds')) * .00018;
    return this.formatOz(coffeeTime);
  }

  formatOz(n) {
    return n.toFixed(2).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
  }

  render() {
    return (
      <div className="hero-component">
        <Grid>
          <div className="blurb-container">
            <div className="blurb user-data-blurb">
              <h1>Subject: Kelby Gassman</h1>
              <p>Current time: { moment(this.state.currentTime).format("HH:mm:ss") }</p>
              <p>Species: Homo sapiens sapiens</p>
              <p>Station clearance: pending</p>
              <p>Threat level: trusted</p>
            </div>
            <Row>
              <Col sm={ 7 }>
                <div className="blurb personal-info-blurb">
                  <h3>Front End Developer</h3>
                  <div className="card">
                    <p>Years experience: { this.getExperience() }</p>
                    <p>Residence: Virginia</p>
                    <p>Status: Remote</p>
                    <p>Coffee consumed: { this.getCoffeeOz() } oz</p>
                  </div>
                </div>
              </Col>
              <Col sm={ 5 }>
                <div className="blurb warning-blurb">
                  <h3>Warning</h3>
                  <div className="card">
                    <p>Signal intercepted <img className="icon-error" src={ iconError } alt="error" /></p>
                    <p>No action required</p>
                    <p>Attempting patch<span className="blink">|</span></p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={ 7 }>
                <div className="blurb life-systems-blurb">
                  <h3>Life support</h3>
                  <div className="card">
                    <p>Condition: stable</p>
                    <p>O2 Levels: 98%</p>
                    <p>Pressure: { this.state.pressure } kPa</p>
                    <p>H20 Reclamation: 1.25 GPM</p>
                  </div>
                </div>
              </Col>
              <Col sm={ 5 }>
                <div className="blurb data-blurb">
                  <h3>Connection</h3>
                  <div className="card">
                    <p>Memory: 16 GB</p>
                    <p>Bandwidth: { this.state.bandwidth } MB</p>
                    <p>Latency: { this.state.latency } ms</p>
                    <p>Host: 9.35.153.190</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
        <DoubleArrow />
      </div>
    );
  }
}
