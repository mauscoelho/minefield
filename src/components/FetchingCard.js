import React from 'react';
import styled from 'styled-components';
import { pulseAnimation, Colors } from '../styles';

const ContainerCardOutside = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 15%;
  height: 100px;
  margin: 6px;
`;

const Container = styled.span`
  display: flex;
  flex: 1;
  align-self: stretch;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1px 1px ${Colors.Card.revealedBackground};
  background-color: ${Colors.Card.revealedBackground};
`;

const Pulse = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${Colors.Card.notRevealedBackground};
  animation: ${pulseAnimation} 2s infinite;
`;

const FetchingCard = () =>
  <ContainerCardOutside>
    <Container>
      <Pulse />
    </Container>
  </ContainerCardOutside>;

export default FetchingCard;
