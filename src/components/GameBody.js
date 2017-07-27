import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styles';
import GameContainer from '../containers/GameContainer';

const Container = styled.div`
  display: flex;
  flex: 5;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 2%;
  background-color: ${Colors.Body.background};
`;

const GameSetup = styled.div`
  display: flex;
  width: 30%;
  background-color: ${Colors.Game.leftBackground};

  @media (max-width: 780px) {
    width: 0%;
  }
`;

const CardsBody = styled.div`
  display: flex;
  width: 70%;
  background-color: ${Colors.Game.rightBackground};
  position: relative;
  align-items: center;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const WrapperGame = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const GameContent = styled.div`
  display: flex;
  position: relative;
`;

const GameBackground = styled.div`
  width: 80%;
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 1%;
  padding-left: 15%;
  padding-right: 15%;
`;

const GameBody = () =>
  <Container>
    <Wrapper>
      <WrapperGame>
        <GameContent>
          <GameSetup />
          <CardsBody>
            <GameBackground>
              <GameContainer />
            </GameBackground>
          </CardsBody>
        </GameContent>
      </WrapperGame>
    </Wrapper>
  </Container>;

export default GameBody;
