import React from 'react';
import { LinkContainer, LinkItem, Link } from './banner-styles';
import { FooterStyled, FooterContainer } from './footer-styles';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FooterStyled>
        <FooterContainer>
          <LinkContainer>
            <ul>
              <LinkItem>
                <Link
                  href='https://www.linkedin.com/in/kelby-gassman/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  LinkedIn
                </Link>
              </LinkItem>
              <LinkItem>
                <Link
                  href='https://codesandbox.io/u/Kelbster'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  CodeSandbox
                </Link>
              </LinkItem>
              <LinkItem>
                <Link
                  href='https://codepen.io/Kelbster/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Codepen
                </Link>
              </LinkItem>
              <LinkItem>
                <Link
                  href='https://github.com/kelbster'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Github
                </Link>
              </LinkItem>
            </ul>
          </LinkContainer>
        </FooterContainer>
      </FooterStyled>
    );
  }
}
