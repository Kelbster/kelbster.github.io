import React from 'react';
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
      <PWarning>Possible incomplete projects or features ahead</PWarning>
    </Container>
    {/* Intro to Motion */}
    <WipDescription>
      <H2>Intro to Framer Motion</H2>
      <PDescription>
        <Description>Description:</Description> I built this for a lecture I did
        on Framer Motion.
      </PDescription>
    </WipDescription>
    <IframeStyled
      src='https://codesandbox.io/embed/intro-to-motion-design-2gkye?fontsize=14&hidenavigation=1&theme=dark'
      sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
    />
    {/* Drag and Drop */}
    <WipDescription>
      <H2>React Drag and Drop</H2>
      <PDescription>
        <Description>Description:</Description> This is a proof of concept for a
        drag and drop component.
      </PDescription>
    </WipDescription>
    <IframeStyled
      src='https://codesandbox.io/embed/drag-n-drop-poc-qyjwq?fontsize=14&hidenavigation=1&theme=dark'
      sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
    />
    {/* Chat History */}
    <WipDescription>
      <H2>Chat History</H2>
      <PDescription>
        <Description>Description:</Description> Did you know you can still build
        pages and views with static HTML, CSS, and JS?
      </PDescription>
    </WipDescription>
    <IframeStyled
      src='https://codesandbox.io/embed/pj60063vwx?fontsize=14&hidenavigation=1&theme=dark'
      sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
    />
    {/* Theme toggler */}
    <WipDescription>
      <H2>Theme Toggle</H2>
      <PDescription>
        <Description>Description:</Description> Using React Context API, toggle
        between light and dark themes.
      </PDescription>
    </WipDescription>
    <IframeStyled
      src='https://codesandbox.io/embed/k9zq4vzy7?view=preview'
      sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
    />
    {/* Pokemon team builder */}
    <WipDescription>
      <H2>Pokemon Team Builder</H2>
      <PDescription>
        <Description>Description:</Description> Build a team from the original
        151 Pokemon! Built with React.
      </PDescription>
    </WipDescription>
    <IframeStyled
      src='https://codesandbox.io/embed/pmworpz147?view=preview'
      sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
    />
    {/* Recursion */}
    <WipDescription>
      <H2>Recursion</H2>
      <PDescription>
        <Description>Description:</Description> Practicing some different
        applications for recursion.
      </PDescription>
    </WipDescription>
    <IframeStyled
      src='https://codesandbox.io/embed/jl2p1yl9n9?expanddevtools=1&hidenavigation=1'
      sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
    />
    {/* Higher order functions */}
    <WipDescription>
      <H2>Higher Order Functions</H2>
      <PDescription>
        <Description>Description:</Description> Practicing some data
        manipulation with higher order functions.
      </PDescription>
    </WipDescription>
    <IframeStyled
      src='https://codesandbox.io/embed/k24qn1kny5?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark'
      sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
    />
  </WipStyled>
);

export default Wip;
