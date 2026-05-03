import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  standalone: false,
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<string>();

  constructor() { }

  search(searchTerm: string) {
    this.emitSearch.emit(searchTerm);
  }

  ngOnInit() {
  }

}
