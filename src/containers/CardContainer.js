import {
  compose,
  branch,
  renderComponent,
  withHandlers,
  withState,
} from 'recompose';
import { connect } from 'react-redux';
import Card from '../components/Card';
import FetchingCard from '../components/FetchingCard';
import revealAction from '../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  revealHandler: args => {
    dispatch(revealAction(args));
  },
});

const onClickCard = ({ setFetching, card, revealHandler }) => () => {
  if (!card.isRevealed) {
    setFetching(true);
    revealHandler({ id: card.id });
    setFetching(false);
  }
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
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
