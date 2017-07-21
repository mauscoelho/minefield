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

storiesOf(`Card`, module).add(`not revealed`, () =>
  <Container>
    <Card isRevealed={false} isMine={false} />
  </Container>,
);
storiesOf(`Card`, module).add(`revealed with diamond`, () =>
  <Container>
    <Card isRevealed isMine={false} />
  </Container>,
);
storiesOf(`Card`, module).add(`revealed with mine`, () =>
  <Container>
    <Card isRevealed isMine isFetching={false} />
  </Container>,
);
