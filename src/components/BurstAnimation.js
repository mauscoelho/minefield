import React from 'react';
import styled, { keyframes } from 'styled-components';
import burst from '../images/burst.png';

export const burstAnimation = keyframes`
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

const Burst = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url(${burst});
  background-size: 7100% 180%;
  animation: ${burstAnimation} 1s steps(61);
`;

const BurstAnimation = () =>
  <Container>
    <Burst />
  </Container>;

export default BurstAnimation;
