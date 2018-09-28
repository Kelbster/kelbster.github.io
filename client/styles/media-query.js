import { css } from 'styled-components';

const mediaSizes = {
  desktop: 1025,
  tablet: 1024,
  mobile: 767
};

const mediaQuery = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${mediaSizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {});

export default mediaQuery;

/* Now we have our methods on media and can use them instead of raw queries
*const example = styled.div`
*  { styles }
*
*  ${ mediaQuery.tablet`
*    background: mediumseagreen;
*  `}
*
*  ${ mediaQuery.mobile`
*     background: palevioletred;
*   `}
*`;
*/
