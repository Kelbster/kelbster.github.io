import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Weather from '../weather';
import iFitLogo from './img/ifit-logo.svg';
import iFitNourishLogo from './img/nourish-logo.png';
require('./index.scss');

const CurrentWork = () => (
  <div className="section current-work-component">
    <Grid>
      <Row>
        <Col sm={ 12 }>
          <h1>Current Work</h1>
          <div className="ifit-section-container">
            <Row center="xs">
              <Col sm={ 6 }>
                <a href="https://www.ifit.com/" target="_blank">
                <img className="ifit-logo" src={ iFitLogo } alt="iFit" />
                <p>An international fitness company, website and app.</p>
                <div className="ifit" />
                </a>
              </Col>
              <Col sm={ 6 }>
                <a href="https://www.ifitnourish.com/" target="_blank">
                  <img className="ifit-nourish-logo" src={ iFitNourishLogo } alt="iFit Nourish" />
                  <p>Custom nutrition built on the Shopify platform</p>
                  <div className="ifit ifit-nourish" />
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Grid>
    <Weather />
  </div>
);

export default CurrentWork;
