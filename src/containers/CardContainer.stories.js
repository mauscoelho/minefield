/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import CardContainer from './CardContainer';

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 130px;
  height: 130px;
`;

storiesOf(`CardContainer`, module).add(`fetching true`, () =>
  <Container>
    <CardContainer isFetching />
  </Container>,
);
storiesOf(
  `CardContainer`,
  module,
).add(`fetching false with default props`, () =>
  <Container>
    <CardContainer isFetching={false} />
  </Container>,
);
storiesOf(
  `CardContainer`,
  module,
).add(`fetching false with custom props revealed with a diamond`, () =>
  <Container>
    <CardContainer
      isFetching={false}
      card={{ isRevealed: true, isMine: false, halfRevealed: false }}
    />
  </Container>,
);
storiesOf(
  `CardContainer`,
  module,
).add(`fetching false with custom props revealed with a mine`, () =>
  <Container>
    <CardContainer
      isFetching={false}
      card={{ isRevealed: true, isMine: true, halfRevealed: false }}
    />
  </Container>,
);
