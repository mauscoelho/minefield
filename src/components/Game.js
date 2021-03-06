import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import CardContainer from '../containers/CardContainer';

const Container = styled.div`
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
  flex: 1;
  flex-wrap: wrap;
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
