import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Repos } from '../repos';

interface GithubRepoResponse {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  owner: {
    avatar_url: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class GitHttpServiceService {
  private readonly reposEndpoint = 'https://api.github.com/users';
  private readonly repoCache = new Map<string, Repos[]>();

  constructor(private http: HttpClient) { }

  async searchRepos(searchTerm: string): Promise<Repos[]> {
    const normalizedTerm = searchTerm.trim().toLowerCase();
    const cachedRepos = this.repoCache.get(normalizedTerm);

    if (cachedRepos) {
      return cachedRepos;
    }

    const repos = await firstValueFrom(
      this.http.get<GithubRepoResponse[]>(`${this.reposEndpoint}/${normalizedTerm}/repos`, {
        params: {
          per_page: 30,
          sort: 'updated',
          direction: 'desc'
        }
      })
    );

    const mappedRepos = repos.map((repo) => new Repos(
      repo.name,
      repo.owner.avatar_url,
      repo.description || 'No description provided.',
      repo.html_url,
      repo.language || 'Unspecified',
      repo.stargazers_count || 0,
      repo.forks_count || 0,
      repo.updated_at
    ));

    this.repoCache.set(normalizedTerm, mappedRepos);
    return mappedRepos;
  }
}
