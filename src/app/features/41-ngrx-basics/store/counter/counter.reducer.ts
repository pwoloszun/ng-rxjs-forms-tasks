import { createReducer, on, Action } from '@ngrx/store';
import { produce } from 'immer';

import * as actions from './counter.actions';

export const counterFeatureKey = 'counter';

// slice state shape
export interface SliceState {
  value: number;
  updatedAt: number | null;
}

export const initialState: SliceState = {
  value: -90,
  updatedAt: null,
};

// App STATE
export interface ApplicationState {
  [counterFeatureKey]: SliceState; // IMPORTANT: prop name must equal featureName
}

const counterReducer = createReducer(
  initialState,

  on(actions.incrementCounter, (state, action) => {
    const { incBy, dt } = action;
    const nextState = produce(state, (draft) => {
      draft.value += incBy;
      draft.updatedAt = dt;
    });
    return nextState;
  }),

  // TODO: decrementCounter

  // TODO: resetCounter

);

export function reducer(state: SliceState | undefined, action: Action): SliceState {
  return counterReducer(state, action);
}
