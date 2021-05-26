import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { createStore } from 'src/test/utils/create-store';

import {
  reducer,
  actions,
  ApplicationState,
  asyncCounterFeatureKey,
  selectors,
  effects,
} from '../index';

function createAsyncRefactoredCounterStore() {
  return createStore<ApplicationState>({
    [asyncCounterFeatureKey]: reducer,
  }, [effects.AsyncCounterEffects]);
}

describe('AsyncCounterRefactored Feature', () => {
  describe('initial value', () => {
    // it('should be initialized with defaults', (done) => {
    //   const store = createAsyncRefactoredCounterStore();

    //   const counterValue$ = store.pipe(
    //     select(selectors.selectAsyncCounterValue)
    //   );

    //   const expectedValue = -100;
    //   counterValue$.subscribe((value: number) => {
    //     expect(value).toEqual(expectedValue);
    //     done();
    //   });
    // });

    // it('should set initial updatedAt to null', (done) => {
    //   const store = createAsyncRefactoredCounterStore();

    //   const expectedIsLoading = false;
    //   store.pipe(
    //     select(selectors.selectAsyncCounterIsLoading)
    //   ).subscribe((isLoading: boolean) => {
    //     expect(isLoading).toEqual(expectedIsLoading);
    //     done();
    //   });
    // });
  });

  describe('async increment data flow', () => {
    // it('should increment value', (done) => {
    //   const store = createAsyncRefactoredCounterStore();

    //   const incBy = 7;
    //   const expectedInitialStateValues = { value: -100, isLoading: false };
    //   const expectedAfterIncrementRequestStateValues = { value: -100, isLoading: true };
    //   const expectedAfterIncrementSuccessStateValues = { value: -100 + incBy, isLoading: false };

    //   const expectedStoreValues = [
    //     expectedInitialStateValues,
    //     expectedAfterIncrementRequestStateValues,
    //     expectedAfterIncrementSuccessStateValues
    //   ];

    //   let i = 0;
    //   store.pipe(
    //     map((state: ApplicationState) => {
    //       return {
    //         value: selectors.selectAsyncCounterValue(state),
    //         isLoading: selectors.selectAsyncCounterIsLoading(state),
    //       };
    //     }),
    //   ).subscribe((actualValues: any) => {
    //     expect(actualValues).toEqual(expectedStoreValues[i]);
    //     i += 1;
    //     if (i >= expectedStoreValues.length) {
    //       done();
    //     }
    //   });

    //   const action = actions.incrementAsyncCounterRequest({ incBy });
    //   store.dispatch(action);
    // });

    xit('should decrement value and update updatedAt', (done) => {
      // TODO
    });

  });
});
