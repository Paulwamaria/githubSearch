import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repos } from '../repos';

@Injectable({
  providedIn: 'root'
})
export class GitHttpServiceService {
  repos: Repos[] = [];
  constructor(private http: HttpClient) {
    
   }

  searchRepos(searchTerm: string) {
    
    interface Results {
      data: [];
    
    }
  
    let gitSearchEndPoint = 'https://api.github.com/users/';
    let promise =  new Promise((resolve, reject) => {
      this.http.get<Results>(gitSearchEndPoint + searchTerm ).toPromise().then(
        (result) => {
          
          this.repos = [];
          for (let i = 0; i < result.data.length; i++) {
            let url = result.data[i]["name"];
            let repo = new Repos(url);
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
