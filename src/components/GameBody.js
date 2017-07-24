import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styles';
import GameContainer from '../containers/GameContainer';

const Game = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 8px 40px 0 rgba(15, 43, 97, 0.08);
`;

const RighContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 0 1em 1em 0;
  background-color: ${Colors.Game.rightBackground};
  padding-left: 5em;
  padding-right: 5em;
`;

const LeftContainer = styled.div`
  display: flex;
  width: 31%;
  background-color: ${Colors.Game.leftBackground};
  border-radius: 1em 0 0 1em;
`;

const GameBody = () =>
  <Game>
    <LeftContainer />
    <RighContainer>
      <GameContainer />
    </RighContainer>
  </Game>;

export default GameBody;
