import React from 'react';
import iconArrowDown from './img/icon-arrow-down.svg';
import styled from 'styled-components';

const DoubleArrowStyled = styled.div`
  transform: ${ props => props.transform || 'none' };
`;

const Arrow = styled.img`
  display: block;
  margin: -28px auto;
  position: relative;
  bottom: 0;
  width: 48px;
  height: auto;
  transform: translateY(-32px);
  animation: arrowBlink 1750ms cubic-bezier(0.18, 0.89, 0.32, 1.28) infinite;

  &:nth-child(2) {
    animation-delay: 250ms;
  }

  @keyframes arrowBlink {
    to {
      opacity: 0;
    }
  }
`;

const DoubleArrow = props => (
  <DoubleArrowStyled transform={ props.transform }>
    <Arrow src={ iconArrowDown } alt="arrow" />
    <Arrow src={ iconArrowDown } alt="arrow" />
  </DoubleArrowStyled>
);

export default DoubleArrow;
