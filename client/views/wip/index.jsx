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
  IframeStyled,
  Link,
} from './index-styles';

const Wip = () => (
  <WipStyled>
    <Container>
      <H1>Work in progress</H1>
      <PWip>A sneak peek of some of the things I'm currently working on</PWip>
      <H3Warning>WARNING</H3Warning>
      <PWarning>Possible incomplete projects or features ahead</PWarning>
    </Container>
    {/* Planeswalkers */}
    <WipDescription>
      <H2>Planeswalker Selection</H2>
      <PDescription>
        <Description>Description:</Description> Some Game UI ideas. Built with
        vanilla html, css, and js.
      </PDescription>
    </WipDescription>
    <IframeStyled
      title="Planeswalker Selection"
      src="https://codesandbox.io/embed/stupefied-dew-pi43d?fontsize=14&hidenavigation=1&theme=dark&view=preview"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
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
      title="Pokemon Team Builder"
      src="https://codesandbox.io/embed/pmworpz147?view=preview"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '8rem auto 4rem',
      }}
    >
      <Link
        href="https://codesandbox.io/u/Kelbster/sandboxes"
        rel="noopener noreferrer"
        target="_blank"
      >
        Click here for more of my CodeSandboxes.
      </Link>
    </div>
  </WipStyled>
);

export default Wip;
