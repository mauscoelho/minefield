import React from 'react';
import styled from 'styled-components';
import { Colors, H1Text } from './styles';
import GameContainer from './containers/GameContainer';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Header.background};
`;

const Body = styled.div`
  display: flex;
  flex: 12;
  background-color: ${Colors.Body.background};
`;

const Title = styled(H1Text)`  
  color: ${Colors.Header.title}; 
  font-size: 1.5em;  
`;

const RightContainer = styled.div`
  display: flex;
  flex: 1;
  box-shadow: -0.05em 0 0.3em rgba(0, 0, 0, 0.08);

  @media (max-width: 780px) {
    flex: 0;
  }
`;

const LeftContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2%;
  background-color: ${Colors.Body.background};
`;

const GameControl = styled.div`
  display: flex;
  width: 30%;
  background-color: red;

  @media (max-width: 780px) {
    width: 0%;
  }
`;

const CardsBody = styled.div`
  display: flex;
  width: 70%;
  background-color: blue;
  position: relative;
  align-items: center;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const Test = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const GameHeader = styled.div`
  display: flex;
  position: relative;
`;

const GameOutro = styled.div`
  width: 80%;
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 1%;
  padding-left: 15%;
  padding-right: 15%;
`;

const LeftTest = styled.div`
  display: flex;
  flex: 5;
`;

const App = () =>
  <Container>
    <Header>
      <Title>
        {`Minefield`}
      </Title>
    </Header>
    <Body>
      <LeftTest>
        <LeftContainer>
          <Test>
            <GameHeader>
              <GameControl />
              <CardsBody>
                <GameOutro>
                  <GameContainer />
                </GameOutro>
              </CardsBody>
            </GameHeader>
          </Test>
        </LeftContainer>
      </LeftTest>
      <RightContainer />
    </Body>
  </Container>;

export default App;
