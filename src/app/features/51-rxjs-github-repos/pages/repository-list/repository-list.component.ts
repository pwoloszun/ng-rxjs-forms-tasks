import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, tap, filter } from 'rxjs/operators';

import { searchQuery } from '../../operators/search-query';
import { SearchReposFacadeService } from '../../facades/search-repos-facade.service';
import { RepoItem, RepositoryType, RepoSearchResult, RepoOwner } from '../../models/search-repos.model';

const GITHUB_URL = 'https://api.github.com/search/repositories';
const SEARCH_QUERY_MIN_LENGTH = 3;

@Component({
  selector: 'nts-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css'],
})
export class RepositoryListComponent implements OnInit {
  private selectedRepo$ = new BehaviorSubject<RepoItem | null>(null);

  searchResults$: Observable<RepoItem[]>;
  searchForm = this.buildSearchForm();

  selectedOwner$: Observable<RepoOwner>; // TODO 3b
  ownerAllRepos$: Observable<RepoItem[]>; // TODO 3c

  private get searchQueryControl(): FormControl {
    return this.searchForm.get('searchQuery') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  searchRepos(query: string, type: RepositoryType): Observable<RepoItem[]> {
    // const params = { q: query };
    // this.http.get<RepoSearchResult>(GITHUB_URL, { params });

    return null as any; // TODO 1
  }

  ngOnInit() {
    this.initSearchForm();
  }

  selectRepoHandler(repo: RepoItem) {
    // TODO 3a
  }

  private buildSearchForm(): FormGroup {
    return this.fb.group({
      searchQuery: [''],
    });
  }

  private initSearchForm() {
    // TODO 2:
    // listen to value changes of searchQueryControl
    // wait(debounce) for user input for 500ms
    // check if search query has changed - if not then skip that value
    // filter out queries shorter than SEARCH_QUERY_MIN_LENGTH characters long
    // for each query send search request AND cancel previous pending request if any
    // side effect(tap) console.log() received data
    this.searchResults$ = this.searchQueryControl.valueChanges;
  }

}
