import { select } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { createStore } from 'src/test/utils/create-store';

import { reducer, counterFeatureKey, selectors, ApplicationState, actions } from '../index';

describe('Counter Feature', () => {
  describe('initial value', () => {
    // it('should set initial value to 0', (done) => {
    //   const store = createStore({
    //     [counterFeatureKey]: reducer,
    //   });

    //   const counterValue$ = store.pipe(
    //     select(selectors.selectCounterValue)
    //   );

    //   const expectedValue = 0;
    //   counterValue$.subscribe((value: number) => {
    //     expect(value).toEqual(expectedValue);
    //     done();
    //   });
    // });

    // it('should set initial updatedAt to null', (done) => {
    //   const store = createStore({
    //     [counterFeatureKey]: reducer,
    //   });

    //   const expectedUpdatedAt = null;
    //   store.pipe(
    //     select(selectors.selectCounterUpdatedAt)
    //   ).subscribe((value: number | null) => {
    //     expect(value).toEqual(expectedUpdatedAt);
    //     done();
    //   });
    // });
  });

  describe('IncrementCounter action', () => {
    // it('should increment value and update updatedAt', (done) => {
    //   const store = createStore({
    //     [counterFeatureKey]: reducer,
    //   });

    //   const incBy = 5;
    //   const timestamp = 12345678;

    //   const action = actions.incrementCounter({ incBy, timestamp });
    //   store.dispatch(action);

    //   store.pipe(
    //     map((state: ApplicationState) => {
    //       return [
    //         selectors.selectCounterValue(state),
    //         selectors.selectCounterUpdatedAt(state),
    //       ];
    //     }),
    //   ).subscribe(([value, updatedAt]: [number, number | null]) => {
    //     expect(value).toEqual(incBy);
    //     expect(updatedAt).toEqual(timestamp);
    //     done();
    //   });

    // });

    xit('should decrement value and update updatedAt', (done) => {
      // TODO
    });

  });
});
