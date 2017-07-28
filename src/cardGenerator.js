const faker = ({ isRevealed, isMine, halfRevealed }) => {
  const fakes = [];
  for (let i = 0; i < 25; i += 1) {
    fakes.push({
      id: i,
      isRevealed,
      isMine,
      halfRevealed,
    });
  }
  return fakes;
};

const generateData = ({ isMine }) => {
  const fakes = [];
  for (let i = 0; i < 25; i += 1) {
    fakes.push({
      id: i,
      isRevealed: false,
      isMine,
      halfRevealed: false,
    });
  }
  return fakes;
};

export { faker, generateData };
