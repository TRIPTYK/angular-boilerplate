import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '@cpas/core-data';
@Component({
  selector: 'cpas-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$;
  selectedUser: User;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.usersService.all();
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }
  resetUser() {
    const emptyUser: User = {
      id: null,
      name: '',
      email: '',
      role: 'user',
      isActive: false
    };
    this.selectUser(emptyUser);
  }
  saveProject(user) {
    if (!user.id) {
      this.createUser(user);
    } else {
      this.updateUser(user);
    }
  }
  createUser(user) {
    this.usersService.create(user).subscribe(result => {
      this.getUsers();
      this.resetUser();
    });
  }

  updateUser(user) {
    this.usersService.update(user).subscribe(result => {
      this.getUsers();
      this.resetUser();
    });
  }
  cancel(event) {
    this.resetUser();
  }
  deleteUser(user) {
    this.usersService.delete(user.id).subscribe(result => this.getUsers());
  }
}
