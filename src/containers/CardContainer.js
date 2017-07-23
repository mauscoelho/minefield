import { compose, branch, defaultProps, renderComponent } from 'recompose';
import Card from '../components/Card';
import FetchingCard from '../components/FetchingCard';

const enhance = compose(
  defaultProps({
    isFetching: false,
  }),
  branch(
    props => !props.isFetching,
    renderComponent(Card),
    renderComponent(FetchingCard),
  ),
);

export default enhance(Card);
