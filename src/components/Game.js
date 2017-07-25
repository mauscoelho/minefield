import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Colors } from '../styles';
import CardContainer from '../containers/CardContainer';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  width: 35em;
  flex: 0 0 35em;
  height: 35em;
  background-color: ${Colors.Card.background};
`;

const renderCards = cards =>
  cards.map(card =>
    <CardContainer
      key={card.id}
      id={card.id}
      isRevealed={card.isRevealed}
      isMine={card.isMine}
      halfRevealed={card.halfRevealed}
    />,
  );

const Game = ({ cards }) =>
  <Container>
    {renderCards(cards)}
  </Container>;

Game.propTypes = {
  cards: propTypes.arrayOf(propTypes.object),
};

Game.defaultProps = {
  cards: [],
};

export default Game;
