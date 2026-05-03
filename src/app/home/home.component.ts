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
  repos: Repos[];
  profpic: ProfPic;
  constructor(public gitHttpServiceService: GitHttpServiceService) { }

  ngOnInit() {
  }

  searchRepos(searchTerm) {
    // console.log(searchTerm);
    this.gitHttpServiceService.searchRepos(searchTerm).then((result) => {
      //do something
      // console.log(result);
      this.repos = this.gitHttpServiceService.repos;
      this.profpic = this.gitHttpServiceService.profpic;
    }, (error) => {
      console.log(error);
    });
    // return promise;
  }

}
