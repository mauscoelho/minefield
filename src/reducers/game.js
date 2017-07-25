import Immutable from 'immutable';
import faker from '../faker';
import { CARD_REVEAL } from '../constants';

const cards = faker({ isRevealed: false, isMine: false, halfRevealed: false });

const initialState = Immutable.fromJS({
  cards,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_REVEAL:
      return state.updateIn(
        [`cards`, action.payload.id, `isRevealed`],
        isRevealed => true,
      );
    default:
      return state;
  }
};

export default reducer;
