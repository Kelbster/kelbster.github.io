import styled from 'styled-components';
import mediaQuery from './media-query';

export const fontWork = 'Work Sans, Helvetica, Arial, sans-serif';
export const fontSpace = 'Space Mono, Helvetica, Arial, sans-serif';

export const H1 = styled.h1`
  font-size: 4.6rem;
  line-height: 1;
  letter-spacing: 0;

  ${ mediaQuery.mobile`
    font-size: 3.2rem;
  `}
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
