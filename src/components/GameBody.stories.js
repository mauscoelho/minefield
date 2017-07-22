/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import GameBody from './GameBody';

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 130px;
  height: 130px;
`;

storiesOf(`GameBody`, module).add(`all items not revealed`, () =>
  <Container>
    <GameBody />
  </Container>,
);
