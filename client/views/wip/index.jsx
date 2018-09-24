import React from 'react';
import Weather from '../components/weather';
import Farm from '../components/farm';
import { H1, P } from '../../styles/typography';
import { Container } from '../../styles/layout';
import {
  WipStyled,
  WipDescription,
  PWip,
  H3Warning,
  PWarning,
  Description
} from './index-styles';

const Wip = () => (
  <WipStyled>
    <Container>
      <H1>Work in progress</H1>
      <PWip>A sneak peek of some of the things I'm currently working on</PWip>
      <H3Warning>WARNING</H3Warning>
      <PWarning>Incomplete projects or features ahead</PWarning>
    </Container>
    <WipDescription>
      <P><Description>Description:</Description> The world could always use another <a href="https://github.com/Kelbster/the-weather" target="_blank">weather app...</a> This one features unique backgrounds, icons, and wind direction based on your current, local weather.</P>
    </WipDescription>
    <Weather />
    <WipDescription>
      <P><Description>Description:</Description> This is the start of a <a href="https://github.com/Kelbster/turnip-for-what" target="_blank">farming game</a> I'm building in React.</P>
    </WipDescription>
    <Farm />
  </WipStyled>
);

export default Wip;
