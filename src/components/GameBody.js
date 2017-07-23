import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Colors } from '../styles';
import CardContainer from '../containers/CardContainer';

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 1em 0;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${Colors.background};
`;

const renderCards = cards =>
  cards.map(card => <CardContainer key={card.id} card={card} />);

const GameBody = ({ cards }) =>
  <Container>
    {renderCards(cards)}
  </Container>;

GameBody.propTypes = {
  cards: propTypes.arrayOf(propTypes.object),
};

GameBody.defaultProps = {
  cards: [],
};

export default GameBody;
