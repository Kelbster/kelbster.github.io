import styled from 'styled-components';
import { Container } from '../../styles/layout';
import { fontSpace, H1, H3, P } from '../../styles/typography';
import { gray200 } from '../../styles/colors';
import mediaQuery from '../../styles/media-query';

export const HeroStyled = styled.div`
  height: 700px;

  ${ mediaQuery.mobile`
    height: auto;
    padding-bottom: 120px;
  `}
`;

export const HeroContainer = styled(Container)`
  min-height: 560px;
  padding-top: 90px;
`;

export const Title = styled(H1)`
  color: ${ gray200 };
  margin: 0;
`;

export const PHero = styled(P)`
  font-family: ${ fontSpace };
  font-size: 1.6rem;
  line-height: 1.4;
  text-transform: uppercase;

  ${ mediaQuery.mobile`
    font-size: 1.32rem;
  `}
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 364px 255px;
  grid-template-rows: 110px 110px;
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  margin: 6px 0;

  ${ mediaQuery.mobile`
    display: block;
  `}
`;

export const Blurb = styled.div`

  ${ mediaQuery.mobile`
    margin: 16px 0;
  `}
`;

export const H3Card = styled(H3)`
  color: ${ props => props.color || gray200 };
  margin: 0;
  text-transform: uppercase;
`;

export const IconError = styled.img`
  vertical-align: bottom;

  ${ mediaQuery.mobile`
    height: auto;
    width: 20px;
  `}
`;

export const Blink = styled.span`
  animation: blink 1000ms steps(2, start) infinite;

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
`;
