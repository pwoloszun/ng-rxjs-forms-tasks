import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';

import { selectors, actions } from '../../store/asyncCounter';

@Component({
  selector: 'nts-async-counter',
  templateUrl: './async-counter.component.html',
  styleUrls: ['./async-counter.component.css']
})
export class AsyncCounterComponent {

  value$ = of(456);
  isLoading$ = of(true);

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
