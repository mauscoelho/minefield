import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Colors } from '../styles';
import CardContainer from '../containers/CardContainer';

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
  background-color: ${Colors.Card.background};
`;

const renderCards = cards =>
  cards.map(card => <CardContainer key={card.id} card={card} />);

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
