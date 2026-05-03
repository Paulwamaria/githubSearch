import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  email = 'paulwamaria@gmail.com';
  twitter = '@Paulenigmatico';
  linkedin = 'Paul Wamaria';
  linkedinUrl = 'https://www.linkedin.com/in/paul-wamaria-73b886189/';
  phone = '0768972290';

  constructor() { }

  ngOnInit() {
  }

}
