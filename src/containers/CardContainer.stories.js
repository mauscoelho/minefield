/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CardContainer from './CardContainer';

const mockStore = configureStore();
const store = mockStore({});

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 130px;
  height: 130px;
`;

storiesOf(`CardContainer`, module)
  .addDecorator(getStory =>
    <Provider store={store}>
      {getStory()}
    </Provider>,
  )
  .add(`fetching true (clickable)`, () =>
    <Container>
      <CardContainer
        card={{ isRevealed: false, isMine: false, halfRevealed: false }}
      />
    </Container>,
  );
storiesOf(`CardContainer`, module)
  .addDecorator(getStory =>
    <Provider store={store}>
      {getStory()}
    </Provider>,
  )
  .add(`fetching false with custom props revealed with a diamond`, () =>
    <Container>
      <CardContainer
        card={{
          isRevealed: true,
          isMine: false,
          halfRevealed: false,
        }}
      />
    </Container>,
  );
storiesOf(`CardContainer`, module)
  .addDecorator(getStory =>
    <Provider store={store}>
      {getStory()}
    </Provider>,
  )
  .add(`fetching false with custom props revealed with a mine`, () =>
    <Container>
      <CardContainer
        card={{
          isRevealed: true,
          isMine: true,
          halfRevealed: false,
        }}
      />
    </Container>,
  );
