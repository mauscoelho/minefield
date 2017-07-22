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

const cards = new Array(25).fill({
  isRevealed: false,
  isMine: false,
  halfRevealed: false,
});

storiesOf(`GameBody`, module).add(`all items not revealed`, () =>
  <Container>
    <GameBody cards={cards} />
  </Container>,
);
