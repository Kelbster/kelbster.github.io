import styled from 'styled-components';
import { Container } from '../../styles/layout';
import { fontSpace, fontWork, H3, P } from '../../styles/typography';
import { darkBlue500, red500, gray200 } from '../../styles/colors';

export const WipStyled = styled.div`
  text-transform: uppercase;
  padding: 100px 0 0;
`;

export const WipDescription = Container.extend`
  padding-top: 130px;
  padding-bottom: 20px;
  text-transform: none;

  a {
    color: ${ gray200 };
    text-decoration: none;
    border-bottom: 1px solid;

    &:hover {
      background: ${ gray200 };
      color: ${ darkBlue500 };
    }
  }
`;

export const PWip = P.extend`
  font-family: ${ fontWork };
  font-size: 1.3rem;
  line-height: 1.4;
  margin: 1.6em 0;
`;

export const Description = styled.span`
  background: ${ gray200 };
  color: ${ darkBlue500 };
  font-family: ${ fontSpace };
  text-transform: uppercase;
  padding: 0 6px;
`;

export const PDescription = P.extend`
  font-family: ${ fontWork };
`;

export const H3Warning = H3.extend`
  color: ${ red500 };
  letter-spacing: 0;
  margin: 0;
`;

export const PWarning = styled.p`
  background: ${ red500 };
  color: ${ darkBlue500 };
  font-family: ${ fontSpace };
  font-size: 1.32rem;
  display: inline-block;
  line-height: 1.4;
  margin: 0;
  padding: 0 6px;
`;
