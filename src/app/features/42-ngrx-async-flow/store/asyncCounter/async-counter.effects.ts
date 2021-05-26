import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { delay, map, tap } from 'rxjs/operators';

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
      tap((action) => console.log('incrementAsyncCounter$ Effect:', action)),
      // TODO: delay by DELAY_IN_MS
      // TODO: select current asyncCounter value from Store
      // TODO: calculate nextAsyncValue
      // TODO: dispatch Success event (action)
    );
  }, { dispatch: false });

  // TODO: decrementAsyncCounter$

  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
  ) { }

}
