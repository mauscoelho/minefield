import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styles';
import GameContainer from '../containers/GameContainer';

const Game = styled.div`
  display: flex;
  height: 91%;
  width: 100%;
  border-radius: 1em;
  box-shadow: 0 8px 40px 0 rgba(15, 43, 97, 0.08);
  background-color: ${Colors.Game.rightBackground};
`;

const RighContainer = styled.div`
  display: flex;
  padding-left: 6em;
  padding-right: 4em;
  width: 52%;
  background-color: ${Colors.Game.rightBackground};
  border-radius: 0 1em 1em 0;
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
