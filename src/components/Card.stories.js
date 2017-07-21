/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 130px;
  height: 130px;
`;

storiesOf(`Card`, module).add(`revealed with diamond and not fetching`, () =>
  <Container>
    <Card isRevealed isMine={false} isFetching={false} />
  </Container>,
);
storiesOf(`Card`, module).add(`revealed with mine and not fetching`, () =>
  <Container>
    <Card isRevealed isMine isFetching={false} />
  </Container>,
);
storiesOf(`Card`, module).add(`not revelaled without mine and fetching`, () =>
  <Container>
    <Card isRevealed isMine={false} isFetching />
  </Container>,
);
