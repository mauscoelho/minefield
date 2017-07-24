import {
  compose,
  branch,
  renderComponent,
  withHandlers,
  withState,
} from 'recompose';
import Card from '../components/Card';
import FetchingCard from '../components/FetchingCard';

const onClickCard = ({ setFetching, card }) => () => {
  if (!card.isRevealed) {
    setFetching(true);
  }
};

const enhance = compose(
  withState(`isFetching`, `setFetching`, false),
  withHandlers({
    onClick: onClickCard,
  }),
  branch(
    props => !props.isFetching,
    renderComponent(Card),
    renderComponent(FetchingCard),
  ),
);

export default enhance(Card);
