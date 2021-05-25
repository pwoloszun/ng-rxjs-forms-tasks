import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { delay, map } from 'rxjs/operators';

import * as actions from './async-counter.actions';
import * as selectors from './async-counter.selectors';
import { ApplicationState } from './async-counter.reducer';

const DELAY_IN_MS = 1800;

@Injectable()
export class AsyncCounterEffects {

  private asyncCounterValue$ = this.store$.pipe(
    select(selectors.selectAsyncCounterValue)
  );

  incrementAsyncCounter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.incrementAsyncCounterRequest),
      delay(DELAY_IN_MS),
      concatLatestFrom(() => this.asyncCounterValue$),
      map(([action, value]) => {
        const { incBy } = action;
        const nextValue = value + incBy;
        return actions.incrementAsyncCounterSuccess({ value: nextValue });
      })
    );
  });

  decrementAsyncCounter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.decrementAsyncCounterRequest),
      delay(DELAY_IN_MS),
      concatLatestFrom(() => this.asyncCounterValue$),
      map(([action, value]) => {
        const { decBy } = action;
        const nextValue = value - decBy;
        return actions.decrementAsyncCounterSuccess({ value: nextValue });
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
  ) { }

}
