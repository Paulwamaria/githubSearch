import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient } from '@angular/common/http';
import { GitHttpServiceService } from '../services/git-http-service.service';
import { promise } from 'protractor';
import { Repos } from '../repos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  repos: Repos[];
  constructor(public gitHttpServiceService: GitHttpServiceService) { }

  ngOnInit() {
  }

  searchRepos(searchTerm) {
    // console.log(searchTerm);
    this.gitHttpServiceService.searchRepos(searchTerm).then((result) => {
      //do something
      // console.log(result);
      this.repos = this.gitHttpServiceService.repos;
    }, (error) => {
      console.log(error);
    });
    // return promise;
  }

}
