import { Observable } from 'rxjs';
import { EVENT_CARD_CLICK } from '../constants';
import { revealAction, revealMultipleAction } from '../actions';

const randomResponseTime = Math.floor(Math.random() * (2000 - 200 + 1)) + 200;

const onClickCard = action$ =>
  action$
    .ofType(EVENT_CARD_CLICK)
    .delay(randomResponseTime)
    .mergeMap(action =>
      Observable.of(
        revealAction(action.payload),
        revealMultipleAction(action.payload),
      ),
    );

export default onClickCard;
