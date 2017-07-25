import { CARD_REVEAL } from '../constants';

const revealAction = args => ({
  type: CARD_REVEAL,
  payload: args,
});

export default revealAction;
