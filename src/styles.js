import styled, { keyframes } from 'styled-components';

export const Colors = {
  backgroundRevealed: `#D2D6E6`,
  backgroundNotRevealed: `#FFFFFF`,
  background: `#E2E4F0`,
};

export const ContainerCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 6px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerCardOutside = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  background-color: ${Colors.background};
`;

export const pulseAnimation = keyframes`
0% { transform: scale(0.90); }
25% { transform: scale(1.20); }
50% { transform: scale(1); }
75% { transform: scale(1.20); }
100% { transform: scale(0.90); }
`;

export const fadeInAnimation = keyframes`
from { transform: scale(0); }
to { transform: scale(1); }
`;
