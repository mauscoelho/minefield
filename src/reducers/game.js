import Immutable from 'immutable';
import { generateData } from '../cardGenerator';
import { CARD_REVEAL, CARD_REVEAL_MULTIPLE } from '../constants';

const initialCards = generateData();

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
        card.get(`isRevealed`) === false
          ? card.set(`halfRevealed`, true).set(`isRevealed`, true)
          : card,
    ),
  );

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_REVEAL:
      return revealOne(state, action);
    case CARD_REVEAL_MULTIPLE:
      return action.payload.isMine ? revealMultiple(state, action) : state;
    default:
      return state;
  }
};

export default reducer;
