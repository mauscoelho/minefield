import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import Game from '../components/Game';

const mapStateToProps = state => ({
  cards: state.game.cards,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(Game);
