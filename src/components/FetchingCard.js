import React from 'react';
import styled from 'styled-components';
import {
  ContainerCard,
  ContainerCardOutside,
  pulseAnimation,
  Colors,
} from '../styles';

const Container = styled(ContainerCard)`
  box-shadow: 0 0 2px 1px
    ${Colors.backgroundRevealed};
  background-color: ${Colors.backgroundRevealed};
`;

const Pulse = styled(Container)`  
  background-color: ${Colors.backgroundNotRevealed};
  animation: ${pulseAnimation} 2s infinite;
  align-self: stretch;
  box-shadow: 0 0 2px 1px ${Colors.backgroundNotRevealed};
  box-shadow: 0 0 2px 1px ${Colors.backgroundNotRevealed};
`;

function FetchingCard() {
  return (
    <ContainerCardOutside>
      <Container>
        <Pulse />
      </Container>
    </ContainerCardOutside>
  );
}

export default FetchingCard;
