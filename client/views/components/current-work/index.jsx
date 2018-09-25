import React from 'react';
import DoubleArrow from '../double-arrow';
import { Container } from '../../../styles/layout';
import Card, { PCard } from '../../components/card';
import {
  CurrentWorkStyled,
  H1Work,
  ContainerWorkGrid,
  Blurb,
  H3Blurb,
  PBlurb
} from './index-styles';

const CurrentWork = () => (
  <CurrentWorkStyled>
    <Container>
      <H1Work>Current Work</H1Work>
    </Container>
    <ContainerWorkGrid>
      <Blurb href="https://www.ifit.com/" target="_blank">
        <H3Blurb>iFit</H3Blurb>
        <PBlurb>URL: https://www.ifit.com/</PBlurb>
        <PBlurb>International fitness application</PBlurb>
        <Card height="100px" maxWidth="360px">
          <PCard>Role: Sr Front End Developer</PCard>
          <PCard>Platform: React, Redux</PCard>
        </Card>
      </Blurb>
      <Blurb href="https://www.ifitnourish.com/" target="_blank">
        <H3Blurb>iFit Nourish</H3Blurb>
        <PBlurb>URL: https://www.ifitnourish.com/</PBlurb>
        <PBlurb>Custom built nutrition</PBlurb>
        <Card height="100px" maxWidth="360px">
          <PCard>Role: Sr Front End Developer</PCard>
          <PCard>Platform: Shopify</PCard>
        </Card>
      </Blurb>
      <Blurb href="https://www.lgfit.co/" target="_blank">
        <H3Blurb>LGFIT</H3Blurb>
        <PBlurb>URL: https://www.lgfit.co/</PBlurb>
        <PBlurb>Remote Health and Fitness Coaching</PBlurb>
        <Card height="100px" maxWidth="360px">
          <PCard>Role: Sole Developer</PCard>
          <PCard>Platform: React, Webpack, Netlify</PCard>
        </Card>
      </Blurb>
    </ContainerWorkGrid>
    <DoubleArrow />
  </CurrentWorkStyled>
);

export default CurrentWork;
