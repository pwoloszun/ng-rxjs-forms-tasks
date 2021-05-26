import { createReducer, on, Action } from '@ngrx/store';
import { produce } from 'immer';

import * as actions from './counter.actions';

export const counterFeatureKey = 'counter';

export interface SliceState {
  value: number;
  updatedAt: number | null;
}

export const initialState: SliceState = {
  value: 0,
  updatedAt: null,
};

// App STATE
export interface ApplicationState {
  [counterFeatureKey]: SliceState; // IMPORTANT: prop name must equal featureName
}

const counterReducer = createReducer(
  initialState,

  // on(actions.DDD, (state, action) => {
  //   const { } = action;
  //   return state;
  // }),

  // TODO: decrementCounter

  // TODO: resetCounter

);

export function reducer(state: SliceState | undefined, action: Action): SliceState {
  return counterReducer(state, action);
}
