/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import Game from './Game';
import faker from '../faker';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

storiesOf(`Game`, module).add(`all items not revealed (clickable)`, () => {
  const cards = faker({
    isRevealed: false,
    isMine: false,
    halfRevealed: false,
  });
  return <Game cards={cards} />;
});

storiesOf(`Game`, module).add(`is lost with two mines`, () => {
  const cards = faker({
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
      <Game cards={cards} />
    </Container>
  );
});

storiesOf(`Game`, module).add(`is win with two mines`, () => {
  const cards = faker({
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
      <Game cards={cards} />
    </Container>
  );
});
