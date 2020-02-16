import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@cpas/core-data';

@Component({
  selector: 'cpas-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  currentUser: User;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  @Input() set user(value) {
    if (value) this.originalTitle = value.name;
    this.currentUser = Object.assign({}, value);
  }
}
