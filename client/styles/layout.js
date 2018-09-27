import styled from 'styled-components';
import mediaQuery from './media-query';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 68rem;
  padding: 0 2.4rem;

  ${ mediaQuery.mobile`
    padding: 0 3.2rem;
  `}
`;