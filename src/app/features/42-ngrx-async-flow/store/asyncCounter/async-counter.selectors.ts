import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ApplicationState, SliceState, asyncCounterFeatureKey } from './async-counter.reducer';

const selectFeature = (state: ApplicationState) => state[asyncCounterFeatureKey];

export const selectAsyncCounterValue = createSelector(
  selectFeature,
  (state: SliceState) => state.asyncValue
);

export const selectAsyncCounterIsLoading = createSelector(
  selectFeature,
  (state: SliceState) => state.isLoading
);
