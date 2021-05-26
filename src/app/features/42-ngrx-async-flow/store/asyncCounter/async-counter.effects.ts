import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { delay, map, tap, switchMap, mergeMap, exhaustMap, concatMap } from 'rxjs/operators';

import { CounterValuesService } from '@api/counter-values.service';
import { CounterValue } from '@api/models/counter-value.models';

import { ApplicationState } from './async-counter.reducer';
import * as actions from './async-counter.actions';
import * as selectors from './async-counter.selectors';

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
  // TODO: fetch CounterValue entity from server using CounterValuesService
  //    this.counterValuesService.find(id)

  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
    private counterValuesService: CounterValuesService,
  ) { }

}
