import React from 'react';
import styled from 'styled-components';
import { pulseAnimation, Colors } from '../styles';

const ContainerCardOutside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  margin: 6px;
  padding-top: 20%;
`;

const Container = styled.span`
  display: flex;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 0 1px 1px ${Colors.Card.revealedBackground};
  background-color: ${Colors.Card.revealedBackground};
  background-color: black;
  background-color: ${Colors.Card.notRevealedBackground};
  animation: ${pulseAnimation} 2s infinite;
`;

const Pulse = styled.div`
  width: 20%;
  padding-top: 20%;
  border-radius: 10px;
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
