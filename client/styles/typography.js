import styled from 'styled-components';
import mediaQuery from './media-query';

export const fontWork = 'Work Sans, Helvetica, Arial, sans-serif';
export const fontSpace = 'Space Mono, Helvetica, Arial, sans-serif';

export const H1 = styled.h1`
  font-size: 4.6rem;
  line-height: 1.25;
  letter-spacing: 0;

  ${ mediaQuery.mobile`
    font-size: 3.2rem;
  `}
`;

export const H2 = styled.h2`
  font-size: 2.76rem;
  line-height: 1;
  text-transform: uppercase;
`;

export const H3 = styled.h3`
  font-size: 2.2rem;
  line-height: 1;
`;

export const P = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.875;
  margin: 0;
`;

export const Break = styled.br`
  display: ${ props => props.desktopDisplay || "block" };

  ${ mediaQuery.mobile`
    display: ${ props => props.mobileDisplay || "block" };
  `}
`;
