import { createAction, props } from '@ngrx/store';

export enum CounterActionTypes {
  IncrementCounter = '[Counter] Increment Counter',
  DecrementCounter = '[Counter] Decrement Counter',
  ResetCounter = '[Counter] Reset Counter',
}

export const incrementCounter = createAction(
  '[Source] Event',
  // props<{}>()
);

// TODO: decrementCounter

// TODO: resetCounter
