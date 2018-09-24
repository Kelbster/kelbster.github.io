import { css } from 'styled-components';

const mediaSizes = {
  desktop: 1025,
  tablet: 1024,
  mobile: 767
};

export const mediaQuery = {
  desktop = () => css`
    @media (min-width: ${ mediaSizes.desktop / 16 }em) {
      ${ css(args) };
    }
  `,
  tablet = () => css`
    @media (max-width: ${ mediaSizes.tablet / 16 }em) {
      ${ css(args) };
    }
  `,
  mobile = () => css`
    @media (max-width: ${ mediaSizes.mobile / 16 }em) {
      ${ css(args) };
    }
  `
};

/* Now we have our methods on media and can use them instead of raw queries
*const example = styled.div`
*  { styles }
*
*  ${ mediaQuery.tablet`
*    background: mediumseagreen;
*  `}
*
*  ${ mediaQuery.phone`
*     background: palevioletred;
*   `}
*`;
*/
