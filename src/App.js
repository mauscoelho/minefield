import React from 'react';
import styled from 'styled-components';
import { Colors, H1Text } from './styles';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  max-height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Header.background};
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  background-color: ${Colors.Body.background};
`;

const Title = styled(H1Text)`  
  color: ${Colors.Header.title};  
`;

const RightContainer = styled.div`
  display: flex;
  flex: 1;
  box-shadow: -0.05em 0 0.3em rgba(0, 0, 0, 0.08);
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 5;
  align-items: center;
  justify-content: center;
`;

const App = () =>
  <Container>
    <Header>
      <Title>{`Minefield`}</Title>
    </Header>
    <Body>
      <LeftContainer>
        <H1Text>
          {`GameBody`}
        </H1Text>
      </LeftContainer>
      <RightContainer />
    </Body>
  </Container>;

export default App;
