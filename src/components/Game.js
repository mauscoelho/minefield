import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styles';

const GameContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  border-radius: 1em;
  box-shadow: 0 8px 40px 0 rgba(15, 43, 97, 0.08);
`;

const RighContainer = styled.div`
  display: flex;
  flex: 5;
  background-color: ${Colors.Game.rightBackground};
  border-radius: 0 1em 1em 0;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 2;
  background-color: ${Colors.Game.leftBackground};
  border-radius: 1em 0 0 1em;
`;

const Game = () =>
  <GameContainer>
    <LeftContainer />
    <RighContainer />
  </GameContainer>;

export default Game;
