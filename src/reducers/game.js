import Immutable from 'immutable';
import { generateData } from '../cardGenerator';
import { CARD_REVEAL } from '../constants';

const cards = generateData({
  isMine: true,
});

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
