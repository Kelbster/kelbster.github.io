import React from 'react';
import Typer from '../components/typer';
import { Grid, Row, Col } from 'react-flexbox-grid';
require('./banner.scss');

const typerStringArr = [
  `<p>Mercy on call</p>`,
  `<p>Let&rsquo;s play D&amp;D</p>`,
  `<p>Half-Life 3 confirmed</p>`,
  `<p>Dank memes</p>`,
  `<p>Reach has fallen</p>`,
  `<p>"Oh jeez, Rick" - Morty</p>`,
  `<p>Flavortown</p>`
];

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="banner-component">
        <Grid>
          <div className="banner-container">
            <Row>
              <Col xs={ 12 } sm={ 6 }>
                <p>News Feed:&nbsp;</p>
                <Typer
                  className="banner-typer"
                  strings={ typerStringArr }
                  typeSpeed={ 65 }
                  backSpeed={ 35 }
                  startDelay={ 0 }
                  backDelay={ 2000 }
                  loop={ true }
                  shuffle={ true }
                  smartBackspace={ false }
                />
              </Col>
              <Col xs={ 12 } sm={ 6 }>
                <div className="link-container">
                  <ul>
                    <li><a href="https://www.linkedin.com/in/kelby-gassman-449aa130/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://www.twitter.com/kelbygassman" target="_blank">Twitter</a></li>
                    <li><a href="https://codepen.io/Kelbster/" target="_blank">Codepen</a></li>
                    <li><a href="https://github.com/kelbster" target="_blank">Github</a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
};
