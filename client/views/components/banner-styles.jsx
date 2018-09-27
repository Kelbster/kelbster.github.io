import styled from 'styled-components';
import { fontWork, H1, H3, P } from '../../styles/typography';
import { solidWhite, gray900, darkBlue500 } from '../../styles/colors';
import { Container } from '../../styles/layout';
import mediaQuery from '../../styles/media-query';

export const BannerStyled = styled.div`
  background: ${ darkBlue500 };
  border-bottom: 1px solid rgba(151, 152, 152, .1);
  padding: 5px 0;
  width: 100%;
  text-transform: uppercase;

  .typer-wrap {
    display: inline-block;
    font-family: ${ fontWork };
    font-size: 1rem;
    letter-spacing: .0833em;
    vertical-align: middle;

    > div {
      display: inherit;
    }
  }

  .typed-cursor {
    font-size: .875rem;
    color: $solid-white;
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
  }

  .typed-fade-out {
    opacity: 0;
    animation: 0;
  }

  @keyframes typedjsBlink {
    0% { opacity: 1; }
    50% { opacity: 0.0; }
    100% { opacity: 1; }
  }
`;

export const BannerContainer = styled(Container)`
  ${ mediaQuery.mobile`
    padding-left: 30px;
  `}
`;

export const PBanner = styled(P)`
  display: inline-block;
  font-family: ${ fontWork };
  font-size: 1rem;
  letter-spacing: .0833em;
  vertical-align: middle;

  ${ mediaQuery.mobile`
    padding-left: 11px;
    margin: 6px 0;
  `}
`;

export const NewsFeedContainer = styled.div`
  display: inline-block;
  width: 50%;

  ${ mediaQuery.mobile`
    width: 100%;
  `}
`;

export const LinkContainer = styled.div`
  display: inline-block;
  width: 50%;
  min-width: 310px;

  ${ mediaQuery.mobile`
    width: 323px;
  `}

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
    padding-top: 5px;
  }
`;

export const LinkItem = styled.li`
  list-style: none;
  font-size: 1rem;
  margin: 0 4px;
`;

export const Link = styled.a`
  color: ${ solidWhite };
  padding: 0 4px;
  text-decoration: none;

  &:hover {
    background: ${ solidWhite };
    color: ${ gray900 };
  }
`;
