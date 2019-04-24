import { Component, OnInit } from '@angular/core';
import { Person } from "../../../models/person";

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person[];

  columns = ['first_name', 'last_name', 'nick_name', 'email', 'phone'];

  constructor() { }

  ngOnInit() {
  }

}
