import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';
import { bindActionCreators } from 'redux';
import Game from '../components/Game';

const mapStateToProps = state => ({
  cards: state.get(`game`).get(`cards`),
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(({ cards }) => ({
    cards: cards.toJSON(),
  })),
);

export default enhance(Game);
