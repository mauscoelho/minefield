import faker from '../faker';

const initialState = {
  cards: faker({ isRevealed: false, isMine: false, halfRevealed: false }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
