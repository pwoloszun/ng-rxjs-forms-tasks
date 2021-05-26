import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, MonoTypeOperatorFunction, of, Subscription, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, mergeMap, exhaustMap, filter } from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';

function debounceQuery(delayInMs: number, minLength: number): MonoTypeOperatorFunction<string> {
  return function (source$: Observable<string>) {
    return source$.pipe(/*...*/);
  };
}

@Component({
  selector: 'nts-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent implements OnDestroy {

  searchText = new FormControl('');

  searchResults$ = this.searchText.valueChanges.pipe(
    distinctUntilChanged(),
    filter((q) => q.length > 1),
    debounceTime(1200),
    switchMap((query: string) => this.searchApiService.querySearch$(query))
  );

  constructor(private searchApiService: SearchApiService) {
  }

  ngOnDestroy() {
  }

}
