import { createSelector } from '@ngrx/store';

import { ApplicationState, SliceState, counterFeatureKey } from './counter.reducer';


const selectFeature = (state: ApplicationState) => {
  return state[counterFeatureKey];
};

export const selectCounterValue = (state: ApplicationState) => {
  return selectFeature(state).value;
};

// TODO selectCounterSquareValue

export const selectUpdatedAt = (state: ApplicationState) => {
  return selectFeature(state).updatedAt;
};

export const selectFormattedUpdatedAt = (state: ApplicationState) => {
  const updatedAt = selectUpdatedAt(state);
  if (updatedAt === null) {
    return null;
  } else {
    return new Date(updatedAt).toISOString();
  }
};

// export const selectFormattedUpdatedAt = createSelector(
//   [selectUpdatedAt],
//   (updatedAt) => {
//     if (updatedAt === null) {
//       return null;
//     } else {
//       return new Date(updatedAt).toISOString();
//     }
//   }
// );

// TODO selectFormattedCounterUpdatedAt
