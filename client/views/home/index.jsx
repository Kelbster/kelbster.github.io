import React from 'react';
import BaseComponent from '../components/component';
import Header from '../components/header';
import { Grid, Row, Col } from 'react-flexbox-grid';
import moment from 'moment';
import Weather from '../components/weather';
require('./index.scss');

export default class Home extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-component">
        <Counter />
        <Header />
        <div className="hero-component">
          <Grid fluid>
            <Row>
              <Col sm={ 12 }>
                <div className="copy-container">
                  <h1>Let's get right to it</h1>
                  <h3>Building user interfaces is my <span className="jam">jam!</span></h3>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div>
          <h1>A bunch of stuff!</h1>
          <p>A bunch of other stuff, too! <span className="pre">/// HACK:</span></p>
          <Weather />
        </div>
      </div>
    );
  }
};

const startDate = '2012-01-09T09:00:00-04:00';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: moment().format()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: moment().format()
      })
    }, 1000);
  }

  getExperience() {
    return Math.abs(moment(startDate).diff(this.state.currentTime, 'years'));
  }

  getBeers() {
    const beers = Math.abs(moment(startDate).diff(this.state.currentTime, 'days'));
    return this.formatBeers(beers);
  }

  getOz() {
    const coffeeTime = Math.abs(moment(startDate).diff(this.state.currentTime, 'seconds')) * .00018;
    return this.formatOz(coffeeTime);
  }

  formatOz(n) {
    return n.toFixed(2).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
  }

  formatBeers(n) {
    return n.toFixed(0).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
  }

  render() {
    return (
      <div className="counter-component">
        <ul>
          <li><span className="copy"><span className="hide-on-mobile">Current </span>time:</span> { moment(this.state.currentTime).format("HH:mm:ss") }</li>
          <li><span className="copy"><span className="hide-on-mobile">Years </span>experience:</span> { this.getExperience() }</li>
          <li><span className="copy">Coffee<span className="hide-on-mobile"> consumed</span>:</span> { this.getOz() } oz</li>
          <li><span className="copy">Beers<span className="hide-on-mobile"> purchased</span>:</span> { this.getBeers() }</li>
        </ul>
      </div>
    )
  }
};
