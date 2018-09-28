import React from 'react';
import moment from 'moment';
import Card, { PCard } from './card';
import DoubleArrow from './double-arrow';
import iconError from './img/icon-error.svg';
import { gray200, green500, red500, yellow500 } from '../../styles/colors';
import { Break } from '../../styles/typography';
import {
  HeroStyled,
  HeroContainer,
  Title,
  PHero,
  HeroGrid,
  Blurb,
  H3Card,
  IconError,
  Blink
} from './hero-styles';

const startDate = '2011-05-23T09:00:00-04:00';

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
      <HeroStyled>
        <HeroContainer>
          <div>
            <Title>Subject: <Break desktopDisplay="none" />Kelby Gassman</Title>
            <PHero>Current time: { moment(this.state.currentTime).format("HH:mm:ss") }</PHero>
            <PHero>Species: Homo sapiens sapiens</PHero>
            <PHero>Station clearance: pending</PHero>
            <PHero>Threat level: trusted</PHero>
          </div>
          <HeroGrid>
            <Blurb>
              <H3Card color={ green500 }>Front End Developer</H3Card>
              <Card background={ green500 } height="110px" maxWidth="365px">
                <PCard>Years experience: { this.getExperience() }</PCard>
                <PCard>Residence: Virginia</PCard>
                <PCard>Status: Remote</PCard>
                <PCard>Coffee consumed: { this.getCoffeeOz() } oz</PCard>
              </Card>
            </Blurb>
            <Blurb>
              <H3Card color={ red500 }>Warning</H3Card>
              <Card background={ red500 } height="110px" maxWidth="365px">
                <PCard>Signal intercepted <IconError src={ iconError } alt="error" /></PCard>
                <PCard>No action required</PCard>
                <PCard>Attempting patch<Blink>|</Blink></PCard>
              </Card>
            </Blurb>
            <Blurb>
              <H3Card>Life support</H3Card>
              <Card background={ gray200 } height="110px" maxWidth="365px">
                <PCard>Condition: stable</PCard>
                <PCard>O2 Levels: 98%</PCard>
                <PCard>Pressure: { this.state.pressure } kPa</PCard>
                <PCard>H20 Reclamation: 0.15 GPM</PCard>
              </Card>
            </Blurb>
            <Blurb>
              <H3Card color={ yellow500 }>Connection</H3Card>
              <Card background={ yellow500 } height="110px" maxWidth="365px">
                <PCard>Memory: 16 GB</PCard>
                <PCard>Bandwidth: { this.state.bandwidth } MB</PCard>
                <PCard>Latency: { this.state.latency } ms</PCard>
                <PCard>Host: 9.35.153.190</PCard>
              </Card>
            </Blurb>
          </HeroGrid>
        </HeroContainer>
        <DoubleArrow transform="translateY(100px)" />
      </HeroStyled>
    );
  }
}
