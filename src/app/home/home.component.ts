import { Component, OnInit } from '@angular/core';
import { GitHttpServiceService } from '../services/git-http-service.service';
import { Repos } from '../repos';
import { ProfPic } from '../prof-pic';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  repos: Repos[] = [];
  profpic: ProfPic;
  hasSearched = false;
  isLoading = false;
  errorMessage = '';
  currentSearchTerm = '';

  constructor(public gitHttpServiceService: GitHttpServiceService) { }

  ngOnInit() {
  }

  searchRepos(searchTerm: string) {
    const normalizedTerm = (searchTerm || '').trim();

    if (!normalizedTerm) {
      this.errorMessage = 'Enter a GitHub username to search.';
      return;
    }

    this.hasSearched = true;
    this.isLoading = true;
    this.errorMessage = '';
    this.currentSearchTerm = normalizedTerm;

    this.gitHttpServiceService.searchRepos(normalizedTerm).then((repos) => {
      this.repos = repos;
    }, () => {
      this.repos = [];
      this.errorMessage = 'No GitHub user found for that search. Check the username and try again.';
    }).finally(() => {
      this.isLoading = false;
    });
  }

}
