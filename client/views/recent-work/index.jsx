import React from 'react';
import DoubleArrow from '../components/double-arrow';
import { Container } from '../../styles/layout';
import Card, { PCard } from '../components/card';
import {
  RecentWorkStyled,
  H1Work,
  ContainerWorkGrid,
  Blurb,
  H3Blurb,
  PBlurb,
} from './index-styles';

const RecentWork = () => (
  <RecentWorkStyled>
    <Container>
      <H1Work>Past Work</H1Work>
    </Container>
    <ContainerWorkGrid>
      <Blurb
        href="https://www.ifit.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <H3Blurb>iFit</H3Blurb>
        <PBlurb>Health and fitness application</PBlurb>
        <Card height="100px" maxWidth="360px">
          <PCard>Role: Sr Front End Developer</PCard>
          <PCard>Platform: React, Redux</PCard>
        </Card>
      </Blurb>
      <Blurb
        href="https://www.ifitnourish.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <H3Blurb>iFit Nourish</H3Blurb>
        <PBlurb>Custom built nutrition</PBlurb>
        <Card height="100px" maxWidth="360px">
          <PCard>Role: Sr Front End Developer</PCard>
          <PCard>Platform: Shopify</PCard>
        </Card>
      </Blurb>
      <Blurb
        href="https://www.lgfit.co/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <H3Blurb>LGFIT</H3Blurb>
        <PBlurb>Health and Fitness Coaching</PBlurb>
        <Card height="100px" maxWidth="360px">
          <PCard>Role: Sole Developer</PCard>
          <PCard>Platform: React, Webpack, Netlify</PCard>
        </Card>
      </Blurb>
      <Blurb
        href="https://kelbster.itch.io/construction-zone"
        rel="noopener noreferrer"
        target="_blank"
      >
        <H3Blurb>Construction Zone</H3Blurb>
        <PBlurb>Construction Truck Memory Game</PBlurb>
        <Card height="100px" maxWidth="360px">
          <PCard>Role: Developer, Artist</PCard>
          <PCard>Platform: GameMaker Studio 2, Aseprite</PCard>
        </Card>
      </Blurb>
      <Blurb
        href="https://itch.io/jam/awful-summer-jam-2018/rate/285539"
        rel="noopener noreferrer"
        target="_blank"
      >
        <H3Blurb>Aquaworld 2</H3Blurb>
        <PBlurb>Game Jam</PBlurb>
        <Card height="100px" maxWidth="360px">
          <PCard>Role: Artist</PCard>
          <PCard>Platform: Unity 3D, Aseprite</PCard>
        </Card>
      </Blurb>
    </ContainerWorkGrid>
    <DoubleArrow />
  </RecentWorkStyled>
);

export default RecentWork;
