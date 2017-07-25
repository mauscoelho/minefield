import {
  compose,
  branch,
  renderComponent,
  withHandlers,
  withState,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import Card from '../components/Card';
import FetchingCard from '../components/FetchingCard';
import { cardClickAction } from '../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  revealHandler: args => {
    dispatch(cardClickAction(args));
  },
});

const componentWillReceiveProps = ({ isRevealed, setFetching, isFetching }) => {
  if (isRevealed && isFetching) {
    setFetching(false);
  }
};

const onClickCard = ({ setFetching, isRevealed, id, revealHandler }) => () => {
  if (!isRevealed) {
    setFetching(true);
    revealHandler({ id });
  }
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState(`isFetching`, `setFetching`, false),
  withHandlers({
    onClick: onClickCard,
  }),
  lifecycle({
    componentWillReceiveProps,
  }),
  branch(
    props => !props.isFetching,
    renderComponent(Card),
    renderComponent(FetchingCard),
  ),
);

export default enhance(Card);
