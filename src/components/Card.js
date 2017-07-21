import React from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import diamont from '../images/diamond.png';
import mine from '../images/mine.png';

export const Colors = {
  backgroundRevealed: `#D2D6E6`,
  backgroundNotRevealed: `#FFFFFF`,
  background: `#E2E4F0`,
};

const pulse = keyframes`
0% { transform: scale(0.90); }
25% { transform: scale(1.20); }
50% { transform: scale(1); }
75% { transform: scale(1.20); }
100% { transform: scale(0.90); }
`;

const ContainerAnimated = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  background-color: ${Colors.background};
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 6px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 1px
    ${props =>
      props.isRevealed
        ? Colors.backgroundRevealed
        : Colors.backgroundNotRevealed};
  background-color: ${props =>
    props.isRevealed
      ? Colors.backgroundRevealed
      : Colors.backgroundNotRevealed};
`;

const Icon = styled.img`
  max-width: 100%;
  max-height: 90%;
`;

const Pulse = styled(Container)`	
   background-color: ${Colors.backgroundNotRevealed};   
   animation: ${pulse} 2s infinite;
   align-self: stretch;
   box-shadow: 0 0 2px 1px ${Colors.backgroundNotRevealed};   
  `;

function Card({ isRevealed, isMine, isFetching }) {
  return (
    <ContainerAnimated>
      <Container isRevealed={isRevealed}>
        {isFetching && <Pulse isRevealed={isRevealed} />}
        {!isFetching && <Icon src={isMine ? mine : diamont} />}
      </Container>
    </ContainerAnimated>
  );
}

Card.propTypes = {
  isRevealed: propTypes.bool.isRequired,
  isMine: propTypes.bool.isRequired,
  isFetching: propTypes.bool.isRequired,
};

export default Card;
