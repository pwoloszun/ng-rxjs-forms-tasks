import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { ApplicationState } from '../../store/counter/counter.reducer';

import {
  actions,
  selectors,
} from '../../store/counter';

@Component({
  selector: 'nts-sync-counter',
  templateUrl: './sync-counter.component.html',
  styleUrls: ['./sync-counter.component.css']
})
export class SyncCounterComponent {

  value$ = this.store.select(
    selectors.selectCounterValue
  );

  formUpdt$ = this.store.select(
    selectors.selectFormattedUpdatedAt
  );

  updatedAt$ = of(2000000);;
  squareValue$ = of(456);;

  constructor(private store: Store<any>) {
  }

  increment() {
    const action = actions.incrementCounter({
      incBy: 10,
      dt: Date.now()
    });
    this.store.dispatch(action);
  }

  decrement() {
    // TODO
    // decBy: 5
    // timestamp: Date.now()
  }

  reset() {
    // TODO
  }
}
