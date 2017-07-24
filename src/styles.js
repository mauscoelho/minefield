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
};

export const H1Text = styled.h1`
  font-family: Proxima Nova;
  @font-face {
    font-family: 'Proxima Nova';
    src: url(${proximaNova});
  }
`;

export const pulseAnimation = keyframes`
0% { transform: scale(0.90); }
25% { transform: scale(1.15); }
50% { transform: scale(0.90); }
75% { transform: scale(1.15); }
100% { transform: scale(0.90); }
`;

export const hideAnimation = keyframes`
to {
  width:0;
  height:0;
  overflow:hidden;
  }
`;

export const blinkAnimation = keyframes`
100% { background-position: -6900px; }
`;

export const burstAnimation = keyframes`
100% { background-position: -23960px; }
`;

export const revealAnimation = keyframes`
from { transform: scale(0.50); }
to { transform: scale(1); }
`;
