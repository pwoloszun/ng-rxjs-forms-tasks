import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectors, actions } from '../../store/asyncCounter';

@Component({
  selector: 'nts-async-counter',
  templateUrl: './async-counter.component.html',
  styleUrls: ['./async-counter.component.css']
})
export class AsyncCounterComponent {

  value$ = this.store.pipe(
    select(selectors.selectAsyncCounterValue)
  );
  isLoading$ = this.store.pipe(
    select(selectors.selectAsyncCounterIsLoading)
  );

  constructor(private store: Store<any>) {
  }

  increment() {
    this.store.dispatch(actions.incrementAsyncCounterRequest({ incBy: 10 }));
  }

  decrement() {
    this.store.dispatch(actions.decrementAsyncCounterRequest({ decBy: 5 }));
  }

  reset() {
    // TODO
  }

}
