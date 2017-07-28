import {
  CARD_REVEAL,
  EVENT_CARD_CLICK,
  CARD_REVEAL_MULTIPLE,
} from '../constants';

const revealAction = args => ({
  type: CARD_REVEAL,
  payload: args,
});

const revealMultipleAction = args => ({
  type: CARD_REVEAL_MULTIPLE,
  payload: args,
});

const cardClickAction = args => ({
  type: EVENT_CARD_CLICK,
  payload: args,
});

export { revealAction, cardClickAction, revealMultipleAction };
