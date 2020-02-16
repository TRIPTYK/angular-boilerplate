import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@cpas/core-data';
@Component({
  selector: 'cpas-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users: User[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
