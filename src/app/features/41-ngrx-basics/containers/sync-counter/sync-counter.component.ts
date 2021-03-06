import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';

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

  value$ = of(123);
  updatedAt$ = of(2000000);;
  squareValue$ = of(456);;

  constructor(private store: Store<any>) {
  }

  increment() {
    // TODO
  }

  decrement() {
    // TODO
  }

  reset() {
    // TODO
  }
}
