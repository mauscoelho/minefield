/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
    <Card
      onClick={action(`card clicked`)}
      card={{ isRevealed: false, isMine: false, halfRevealed: false }}
    />
  </Container>,
);
storiesOf(`Card`, module).add(`revealed with diamond`, () =>
  <Container>
    <Card
      onClick={action(`card clicked`)}
      card={{ isRevealed: true, isMine: false, halfRevealed: false }}
    />
  </Container>,
);
storiesOf(`Card`, module).add(`revealed with mine`, () =>
  <Container>
    <Card
      onClick={action(`card clicked`)}
      card={{ isRevealed: true, isMine: true, halfRevealed: false }}
    />
  </Container>,
);
storiesOf(`Card`, module).add(`is loss and half revealed with diamond`, () =>
  <Container>
    <Card
      onClick={action(`card clicked`)}
      card={{ isRevealed: true, isMine: false, halfRevealed: true }}
    />
  </Container>,
);
storiesOf(`Card`, module).add(`is loss and half revealed with mine`, () =>
  <Container>
    <Card
      onClick={action(`card clicked`)}
      card={{ isRevealed: true, isMine: true, halfRevealed: true }}
    />
  </Container>,
);
