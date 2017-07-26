import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styles';
import PulseAnimation from './PulseAnimation';

const Container = styled.div`
  display: flex;
  flex: 1 0 20%;
`;

const ResponsiveContainer = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex: 1 0 20%;
  background-color: ${Colors.Card.revealedBackground};

  &::before {
    content: '';
    float: left;
    padding-top: 100%;
  }
`;

const AnimationContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 98%;
  width: 90%;
`;

const FetchingCard = () =>
  <Container>
    <ResponsiveContainer>
      <AnimationContainer>
        <PulseAnimation />
      </AnimationContainer>
    </ResponsiveContainer>
  </Container>;

export default FetchingCard;
