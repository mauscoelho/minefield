import Immutable from 'immutable';
import { generateData } from '../cardGenerator';
import { CARD_REVEAL } from '../constants';

const initialCards = generateData({
  isMine: true,
});

const initialState = Immutable.fromJS({
  cards: initialCards,
});

const revealOne = (state, action) =>
  state.updateIn(
    [`cards`, action.payload.id, `isRevealed`],
    isRevealed => true,
  );

const revealMultiple = (state, action) =>
  state.update(`cards`, cards =>
    cards.map(
      card =>
        card.get(`id`) === action.payload.id
          ? card.set(`isRevealed`, true)
          : card.set(`halfRevealed`, true).set(`isRevealed`, true),
    ),
  );

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_REVEAL:
      return action.payload.isMine
        ? revealMultiple(state, action)
        : revealOne(state, action);
    default:
      return state;
  }
};

export default reducer;
