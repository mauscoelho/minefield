import { combineEpics } from 'redux-observable';
import game from './game';

export default combineEpics(game);
