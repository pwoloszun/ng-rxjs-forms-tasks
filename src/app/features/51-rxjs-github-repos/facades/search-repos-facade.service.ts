import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map, tap, switchMap } from 'rxjs/operators';
import { RepoItem, RepoOwner, RepositoryType } from '../models/search-repos.model';

const GITHUB_URL = 'https://api.github.com/search/repositories';

@Injectable({
  providedIn: 'root'
})
export class SearchReposFacadeService {
  private selectedRepo$ = new BehaviorSubject<RepoItem | null>(null);

  // TODO
  isLoading$: Observable<boolean>;
  selectedOwner$: Observable<RepoOwner>;
  ownerAllRepos$: Observable<RepoItem[]>;

  constructor(private http: HttpClient) { }

  searchRepos(query: string, type: RepositoryType): Observable<RepoItem[]> {
    //TODO
    return null as any;
  }

  selectRepo(repo: RepoItem): void {
    //TODO
  }

  fetchReposByOwner(owner: RepoOwner): Observable<RepoItem[]> {
    //TODO
    return null as any;
  }
}
