import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../styles';

export const pulseAnimation = keyframes`
0% { transform: scale(0.95); }
25% { transform: scale(1.12); }
50% { transform: scale(0.95); }
75% { transform: scale(1.12); }
100% { transform: scale(0.95); }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    display: block;
    padding-top: 90%;
  }
`;

const Pulse = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  background-color: ${Colors.FetchingAnimation.background};
  animation: ${pulseAnimation} 2s infinite;
`;

const PulseAnimation = () =>
  <Container>
    <Pulse />
  </Container>;

export default PulseAnimation;
