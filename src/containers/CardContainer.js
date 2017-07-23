import { compose, branch, defaultProps, renderComponent } from 'recompose';
import Card from '../components/Card';
import FetchingCard from '../components/FetchingCard';

const enhance = compose(
  defaultProps({
    card: {
      isFetching: false,
      isRevealed: false,
      isMine: false,
      halfRevealed: false,
    },
  }),
  branch(
    props => !props.card.isFetching,
    renderComponent(Card),
    renderComponent(FetchingCard),
  ),
);

export default enhance(Card);
