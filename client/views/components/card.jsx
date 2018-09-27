import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gray200, darkBlue500 } from '../../styles/colors';
import { P } from '../../styles/typography';
import mediaQuery from '../../styles/media-query';

const CardStyled = styled.div`
  background: ${props => props.backgroundColor || gray200 };
  color: ${props => props.color || darkBlue500 };
  padding: ${props => props.padding || '12px'};
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || 'none' };
`;

export const PCard = styled(P)`
  font-size: 1.6rem;
  line-height: 1.4;

  ${ mediaQuery.mobile`
    font-size: 1.32rem;
  `}
`;

const Card = props => (
  <CardStyled
    background={ props.background }
    color={ props.color }
    padding={ props.padding }
    height={ props.height }
    width={ props.width }
    maxWidth={ props.maxWidth }
  >
    { props.children }
  </CardStyled>
);

Card.PropTypes = {
  // All proptypes on Card are optional
  background: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string
}

export default Card;
