import styled, { keyframes } from 'styled-components';
import proximaNova from './fonts/Proxima-Nova-Alt-Regular-webfont.ttf';

export const Colors = {
  Card: {
    revealedBackground: `#D2D6E6`,
    notRevealedBackground: `#FFFFFF`,
    background: `#E2E4F0`,
  },
  Header: {
    title: `#fff`,
    background: `#5db9f7`,
  },
  Body: {
    background: `#f7f7fa`,
  },
  Game: {
    leftBackground: `#fff`,
    rightBackground: `#E2E4F0`,
  },
  FetchingAnimation: {
    background: `#fff`,
  },
};

export const H1Text = styled.h1`
  font-family: Proxima Nova;
  @font-face {
    font-family: 'Proxima Nova';
    src: url(${proximaNova});
  }
`;

export const hideAnimation = keyframes`
to {
  width:0;
  height:0;
  overflow:hidden;
  }
`;

export const revealAnimation = keyframes`
0% { transform: scale(0.60); }
50% { transform: scale(1.20); }
100% { transform: scale(1); }
`;
