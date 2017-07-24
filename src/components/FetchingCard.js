import React from 'react';
import styled from 'styled-components';
import {
  ContainerCard,
  ContainerCardOutside,
  pulseAnimation,
  Colors,
} from '../styles';

const Container = styled(ContainerCard)`
  box-shadow: 0 0 1px 1px
    ${Colors.Card.revealedBackground};
  background-color: ${Colors.Card.revealedBackground};
`;

const Pulse = styled(Container)`  
  background-color: ${Colors.Card.notRevealedBackground};
  animation: ${pulseAnimation} 2s infinite;
  align-self: stretch;
  box-shadow: 0 0 2px 1px ${Colors.Card.notRevealedBackground};
  box-shadow: 0 0 2px 1px ${Colors.Card.notRevealedBackground};
`;

const FetchingCard = () =>
  <ContainerCardOutside>
    <Container>
      <Pulse />
    </Container>
  </ContainerCardOutside>;

export default FetchingCard;
