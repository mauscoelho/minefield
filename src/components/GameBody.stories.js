/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import GameBody from './GameBody';

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 620px;
`;

const generateFakeCards = ({ isRevealed, isMine, halfRevealed }) => {
  const fakes = [];
  for (let i = 0; i < 25; i += 1) {
    fakes.push({
      id: i,
      isRevealed,
      isMine,
      halfRevealed,
    });
  }
  return fakes;
};

storiesOf(`GameBody`, module).add(`all items not revealed`, () => {
  const cards = generateFakeCards({
    isRevealed: false,
    isMine: false,
    halfRevealed: false,
  });
  return (
    <Container>
      <GameBody cards={cards} />
    </Container>
  );
});

storiesOf(
  `GameBody`,
  module,
).add(`all items not revealed and one fetching`, () => {
  const cards = generateFakeCards({
    isRevealed: false,
    isMine: false,
    halfRevealed: false,
  });
  cards[0] = {
    id: 0,
    isRevealed: true,
    isMine: true,
    halfRevealed: false,
    isFetching: true,
  };
  return (
    <Container>
      <GameBody cards={cards} />
    </Container>
  );
});

storiesOf(`GameBody`, module).add(`is lost with two mines`, () => {
  const cards = generateFakeCards({
    isRevealed: true,
    isMine: false,
    halfRevealed: true,
  });
  cards[0] = {
    id: 0,
    isRevealed: true,
    isMine: true,
    halfRevealed: false,
  };
  cards[1] = {
    id: 1,
    isRevealed: true,
    isMine: true,
    halfRevealed: true,
  };
  return (
    <Container>
      <GameBody cards={cards} />
    </Container>
  );
});

storiesOf(`GameBody`, module).add(`is win with two mines`, () => {
  const cards = generateFakeCards({
    isRevealed: true,
    isMine: false,
    halfRevealed: true,
  });
  cards[0] = {
    id: 0,
    isRevealed: true,
    isMine: false,
    halfRevealed: false,
  };
  cards[1] = {
    id: 1,
    isRevealed: true,
    isMine: true,
    halfRevealed: true,
  };
  cards[2] = {
    id: 2,
    isRevealed: true,
    isMine: true,
    halfRevealed: true,
  };
  return (
    <Container>
      <GameBody cards={cards} />
    </Container>
  );
});
