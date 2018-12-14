import React from 'react';
import Typer from '../components/typer';
import {
  BannerStyled,
  BannerContainer,
  PBanner,
  NewsFeedContainer,
  LinkContainer,
  LinkItem,
  Link
} from './banner-styles';

const typerStringArr = [
  `<PBanner>Mercy on call</PBanner>`,
  `<PBanner>Let&rsquo;s play D&amp;D</PBanner>`,
  `<PBanner>Half-Life 3 confirmed</PBanner>`,
  `<PBanner>Dank memes</PBanner>`,
  `<PBanner>Reach has fallen</PBanner>`,
  `<PBanner>"Oh jeez, Rick" - Morty</PBanner>`,
  `<PBanner>Flavortown</PBanner>`
];

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BannerStyled>
        <BannerContainer>
          <NewsFeedContainer>
            <PBanner>News Feed:&nbsp;</PBanner>
            <Typer
              className="banner-typer"
              strings={ typerStringArr }
              typeSpeed={ 65 }
              backSpeed={ 35 }
              startDelay={ 0 }
              backDelay={ 2000 }
              loop={ true }
              shuffle={ true }
              smartBackspace={ false }
            />
          </NewsFeedContainer>
          <LinkContainer>
            <ul>
              <LinkItem>
                <Link href="https://www.linkedin.com/in/kelby-gassman/" rel="noopener noreferrer" target="_blank">LinkedIn</Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://www.twitter.com/Kelbster" rel="noopener noreferrer" target="_blank">Twitter</Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://codepen.io/Kelbster/" rel="noopener noreferrer" target="_blank">Codepen</Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://www.behance.net/kelbygassme22b" rel="noopener noreferrer" target="_blank">Pixel Art</Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://github.com/kelbster" rel="noopener noreferrer" target="_blank">Github</Link>
              </LinkItem>
            </ul>
          </LinkContainer>
        </BannerContainer>
      </BannerStyled>
    )
  }
};
