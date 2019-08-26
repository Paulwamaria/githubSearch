import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repos } from '../repos';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GitHttpServiceService {
  repos: Repos[] = [];
  gitAPI='78bf3cd53966187cbfc945e904e336d101a7e1c6';
  constructor(private http: HttpClient) {

   }

  searchRepos(searchTerm: string) {

    interface Results {
      data: [];

    }
    // https://api.github.com/users/Paulwamaria/repos?api_key=78bf3cd53966187cbfc945e904e336d101a7e1c6
    let gitSearchEndPoint = 'https://api.github.com/users/';
    let promise =  new Promise((resolve, reject) => {
      this.http.get<Results>(gitSearchEndPoint + searchTerm + '/repos?api_key=' + this.gitAPI).toPromise().then(
        (result: any) => {

          this.repos = [];
          for (let i = 0; i < result.length; i++) {
            let url = result[i].name;
            let avatarUrl = result[i].owner.avatar_url;
            let description = result[i].description;
            let repo = new Repos(url, avatarUrl, description);
            this.repos.push(repo);
          }
          console.log(this.repos);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
  });
    return promise;
  }
}
