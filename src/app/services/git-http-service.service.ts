import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Repos } from '../repos';
import { ProfPic } from '../prof-pic';

@Injectable({
  providedIn: 'root'
})
export class GitHttpServiceService {
  repos: Repos[] = [];
  profpic: ProfPic;
  constructor(private http: HttpClient) {

   }

  async searchRepos(searchTerm: string): Promise<Repos[]> {
    // https://api.github.com/users/Paulwamaria/repos?api_key=78bf3cd53966187cbfc945e904e336d101a7e1c6
    let gitSearchEndPoint = 'https://api.github.com/users/';
    try {
      const result = await firstValueFrom(this.http.get<any[]>(gitSearchEndPoint + searchTerm + '/repos?api_key=' + environment.GITHUBAPIKEY));

      this.repos = [];
      for (let i = 0; i < result.length; i++) {
        let url = result[i].name;
        // this.profpic = result[i].owner.avatar_url;
        let avatarUrl = result[i].owner.avatar_url;
        let description = result[i].description || 'No description provided.';
        let repo = new Repos(
          url,
          avatarUrl,
          description,
          result[i].html_url,
          result[i].language || 'Unspecified',
          result[i].stargazers_count || 0,
          result[i].forks_count || 0,
          result[i].updated_at
        );
        this.repos.push(repo);
      }
      return this.repos;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
