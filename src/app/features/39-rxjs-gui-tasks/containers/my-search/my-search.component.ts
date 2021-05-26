import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, mergeMap, exhaustMap } from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';

@Component({
  selector: 'nts-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent implements OnDestroy {

  searchText = new FormControl('');

  searchResults$ = this.searchText.valueChanges.pipe(

  );

  constructor(private searchApiService: SearchApiService) {
  }

  // xxx = this.searchApiService.querySearch$('batman!');

  ngOnDestroy() {
  }

}
