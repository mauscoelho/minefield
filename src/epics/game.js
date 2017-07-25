import { Observable } from 'rxjs';
import { EVENT_CARD_CLICK } from '../constants';
import { revealAction } from '../actions';

const randomResponseTime = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;

const onClickCard = action$ =>
  action$
    .ofType(EVENT_CARD_CLICK)
    .delay(randomResponseTime)
    .mergeMap(action => Observable.of(revealAction(action.payload)));

export default onClickCard;
