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
  reveal: args => {
    dispatch(cardClickAction(args));
  },
});

const componentWillReceiveProps = ({ isRevealed, setFetching, isFetching }) => {
  if (isRevealed && isFetching) {
    setFetching(false);
  }
};

const handlerClick = ({
  setFetching,
  isRevealed,
  id,
  isMine,
  reveal,
}) => () => {
  if (!isRevealed) {
    setFetching(true);
    reveal({ id, isMine });
  }
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState(`isFetching`, `setFetching`, false),
  withHandlers({
    handlerClick,
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
