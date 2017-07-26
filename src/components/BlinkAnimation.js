import React from 'react';
import styled, { keyframes } from 'styled-components';
import blink from '../images/blink.png';

export const blinkAnimation = keyframes`
from { background-position: 0%  }
to { background-position: 100%; }
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

const Blink = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url(${blink});
  background-size: 2400% 118%;
  animation: ${blinkAnimation} 2s steps(22);
`;

const BlinkAnimation = () =>
  <Container>
    <Blink />
  </Container>;

export default BlinkAnimation;
