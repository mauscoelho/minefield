import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import diamont from '../images/diamond.png';
import mine from '../images/mine.png';

export const Colors = {
  backgroundRevealed: `#D2D6E6`,
  backgroundNotRevealed: `#FFFFFF`,
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isRevealed
      ? Colors.backgroundRevealed
      : Colors.backgroundNotRevealed};
`;

const Icon = styled.img`
  max-width: 100%;
  max-height: 90%;
`;

function Card({ isRevealed, isMine }) {
  return (
    <Container isRevealed={isRevealed}>
      <Icon src={isMine ? mine : diamont} />
    </Container>
  );
}

Card.propTypes = {
  isRevealed: propTypes.bool.isRequired,
  isMine: propTypes.bool.isRequired,
};

export default Card;
