import React from 'react';
import Weather from '../components/weather';
import Farm from '../components/farm';
import { H1, H2 } from '../../styles/typography';
import { Container } from '../../styles/layout';
import {
  WipStyled,
  WipDescription,
  PWip,
  H3Warning,
  PWarning,
  PDescription,
  Description,
  IframeStyled
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
      <H2>Theme Toggle</H2>
      <PDescription><Description>Description:</Description> Using React Context API, toggle between light and dark themes.</PDescription>
    </WipDescription>
    <IframeStyled src="https://codesandbox.io/embed/k9zq4vzy7?view=preview" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></IframeStyled>
    <WipDescription>
      <H2>Pokemon Team Builder</H2>
      <PDescription><Description>Description:</Description> Build a team from the original 151 Pokemon! Built with React.</PDescription>
    </WipDescription>
    <IframeStyled src="https://codesandbox.io/embed/pmworpz147?view=preview" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></IframeStyled>
    <WipDescription>
      <H2>Recursion</H2>
      <PDescription><Description>Description:</Description> Practicing some different applications for recursion in JS.</PDescription>
    </WipDescription>
    <IframeStyled src="https://codesandbox.io/embed/jl2p1yl9n9?expanddevtools=1&hidenavigation=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></IframeStyled>
    <WipDescription>
      <H2>Current Weather</H2>
      <PDescription><Description>Description:</Description> The world could always use another <a href="https://github.com/Kelbster/the-weather" target="_blank">weather app...</a> This one features unique backgrounds, icons, and wind direction based on your current, local weather.</PDescription>
    </WipDescription>
    <Weather />
    <WipDescription>
      <H2>On The Farm</H2>
      <PDescription><Description>Description:</Description> This is the start of a <a href="https://github.com/Kelbster/turnip-for-what" target="_blank">farming game</a> I'm building in React.</PDescription>
    </WipDescription>
    <Farm />
  </WipStyled>
);

export default Wip;
