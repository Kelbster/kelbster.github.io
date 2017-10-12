import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import DoubleArrow from '../double-arrow';
require('./index.scss');

const CurrentWork = () => (
  <div className="section current-work-component">
    <div className="current-work-container">
      <Grid fluid>
        <Row>
          <Col xs={ 10 } xsOffset={ 1 } sm={ 12 } smOffset={ 0 }>
            <h1>Current Work</h1>
          </Col>
        </Row>
      </Grid>
      <Grid fluid>
        <Row>
          <Col xs={ 12 }>
            <div className="work-section-container">
              <Row>
                <Col xs={ 10 } xsOffset={ 1 } sm={ 6 } smOffset={ 0 }>
                  <a className="blurb work-info-blurb" href="https://www.ifit.com/" target="_blank">
                    <h3>iFit</h3>
                    <p>URL: https://www.ifit.com/</p>
                    <p>International fitness application</p>
                    <div className="card">
                      <p>Role: Sr Front End Developer</p>
                      <p>Platform: React, Redux</p>
                    </div>
                  </a>
                </Col>
                  <Col xs={ 10 } xsOffset={ 1 } sm={ 6 } smOffset={ 0 }>
                  <a className="blurb work-info-blurb" href="https://www.ifitnourish.com/" target="_blank">
                    <h3>iFit Nourish</h3>
                    <p>URL: https://www.ifitnourish.com/</p>
                    <p>Custom built nutrition</p>
                    <div className="card">
                      <p>Role: Sr Front End Developer</p>
                      <p>Platform: Shopify</p>
                    </div>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col xs={ 10 } xsOffset={ 1 } sm={ 6 } smOffset={ 0 }>
                  <a className="blurb work-info-blurb" href="https://www.lgfit.co/" target="_blank">
                    <h3>LGFIT</h3>
                    <p>URL: https://www.lgfit.co/</p>
                    <p>Remote Health and Fitness Coaching</p>
                    <div className="card">
                      <p>Role: Sole Developer</p>
                      <p>Platform: React, Webpack, Netlify</p>
                    </div>
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    <DoubleArrow />
  </div>
);

export default CurrentWork;
