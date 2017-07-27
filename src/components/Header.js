import React from 'react';
import styled from 'styled-components';
import { Colors, H1Text } from '../styles';

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Header.background};
`;

const Title = styled(H1Text)`  
  color: ${Colors.Header.title}; 
  font-size: 1.5em;  
`;

const Header = () =>
  <HeaderContainer>
    <Title>
      {`Minefield`}
    </Title>
  </HeaderContainer>;

export default Header;
