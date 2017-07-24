/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

storiesOf(`Card`, module).add(`not revealed`, () =>
  <Card
    onClick={action(`card clicked`)}
    card={{ isRevealed: false, isMine: false, halfRevealed: false }}
  />,
);
storiesOf(`Card`, module).add(`revealed with diamond`, () =>
  <Card
    onClick={action(`card clicked`)}
    card={{ isRevealed: true, isMine: false, halfRevealed: false }}
  />,
);
storiesOf(`Card`, module).add(`revealed with mine`, () =>
  <Card
    onClick={action(`card clicked`)}
    card={{ isRevealed: true, isMine: true, halfRevealed: false }}
  />,
);
storiesOf(`Card`, module).add(`is loss and half revealed with diamond`, () =>
  <Card
    onClick={action(`card clicked`)}
    card={{ isRevealed: true, isMine: false, halfRevealed: true }}
  />,
);
storiesOf(`Card`, module).add(`is loss and half revealed with mine`, () =>
  <Card
    onClick={action(`card clicked`)}
    card={{ isRevealed: true, isMine: true, halfRevealed: true }}
  />,
);
