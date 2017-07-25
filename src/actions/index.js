import { CARD_REVEAL, EVENT_CARD_CLICK } from '../constants';

const revealAction = args => ({
  type: CARD_REVEAL,
  payload: args,
});

const cardClickAction = args => ({
  type: EVENT_CARD_CLICK,
  payload: args,
});

export { revealAction, cardClickAction };
