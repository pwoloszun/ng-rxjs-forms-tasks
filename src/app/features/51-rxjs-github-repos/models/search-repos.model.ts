export enum RepositoryType {
  USER = 'USER',
  ORGANIZATION = 'ORGANIZATION'
}

export interface RepoOwner {
  type: string;
  login: string;
  avatar_url: string;
  repos_url: string;
  [k: string]: any;
}

export interface RepoItem {
  owner: RepoOwner;
  [k: string]: any;
}

export interface RepoSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: RepoItem[];
}
