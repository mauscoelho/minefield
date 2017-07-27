import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const App = () =>
  <Container>
    <Header />
    <Content />
  </Container>;

export default App;
