/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import React from 'react';
import Card from './Card';

const Container = styled.div`
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
  flex: 1;
  flex-wrap: wrap;
`;

storiesOf(`Card`, module)
  .add(`revealed with diamond`, () =>
    <Container>
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine={false}
        halfRevealed={false}
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine={false}
        halfRevealed={false}
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine={false}
        halfRevealed={false}
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine={false}
        halfRevealed={false}
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine={false}
        halfRevealed={false}
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine={false}
        halfRevealed={false}
      />
    </Container>,
  )
  .add(`revealed with mine`, () =>
    <Container>
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine
        halfRevealed={false}
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine
        halfRevealed={false}
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine
        halfRevealed={false}
      />
    </Container>,
  )
  .add(`is loss and half revealed with diamond`, () =>
    <Container>
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine={false}
        halfRevealed
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine={false}
        halfRevealed
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine={false}
        halfRevealed
      />
    </Container>,
  )
  .add(`is loss and half revealed with mine`, () =>
    <Container>
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine
        halfRevealed
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine
        halfRevealed
      />
      <Card
        handlerClick={action(`card clicked`)}
        isRevealed
        isMine
        halfRevealed
      />
    </Container>,
  );
