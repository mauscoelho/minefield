import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styles';
import GameBody from './GameBody';

const Container = styled.div`
  display: flex;
  flex: 12;
  background-color: ${Colors.Body.background};
`;

const Sidebar = styled.div`
  display: flex;
  flex: 1;
  box-shadow: -0.05em 0 0.3em rgba(0, 0, 0, 0.08);

  @media (max-width: 780px) {
    flex: 0;
  }
`;

const Content = () =>
  <Container>
    <GameBody />
    <Sidebar />
  </Container>;

export default Content;
