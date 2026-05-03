import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  private activeSearchTerm = '';

  constructor(
    public gitHttpServiceService: GitHttpServiceService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  async searchRepos(searchTerm: string) {
    const normalizedTerm = (searchTerm || '').trim();

    if (!normalizedTerm) {
      this.errorMessage = 'Enter a GitHub username to search.';
      this.changeDetectorRef.detectChanges();
      return;
    }

    this.hasSearched = true;
    this.isLoading = true;
    this.errorMessage = '';
    this.currentSearchTerm = normalizedTerm;
    this.activeSearchTerm = normalizedTerm;

    try {
      const repos = await this.gitHttpServiceService.searchRepos(normalizedTerm);

      if (this.activeSearchTerm !== normalizedTerm) {
        return;
      }

      this.repos = repos;
    } catch {
      if (this.activeSearchTerm !== normalizedTerm) {
        return;
      }

      this.repos = [];
      this.errorMessage = 'No GitHub user found for that search. Check the username and try again.';
    } finally {
      if (this.activeSearchTerm === normalizedTerm) {
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
      }
    }
  }

}
