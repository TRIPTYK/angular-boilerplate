import { Component, OnInit } from '@angular/core';
import { User, UsersFacade } from '@cpas/core-data';
import { Observable } from 'rxjs';
@Component({
  selector: 'cpas-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = this.usersFacade.allProjects$;
  currentUser$: Observable<User> = this.usersFacade.currentUser$;

  constructor(private usersFacade: UsersFacade) {}

  ngOnInit(): void {
    this.usersFacade.loadUsers();
    this.usersFacade.mutations$.subscribe(_ => this.resetCurrentUser());
    this.resetCurrentUser;
  }
  selectUser(user: any) {
    this.usersFacade.selectUser(user.id);
  }
  resetCurrentUser() {
    this.selectUser({ id: null });
  }
  saveUser(user) {
    if (!user.id) {
      this.usersFacade.addUser(user);
    } else {
      this.usersFacade.updateUser(user);
    }
  }

  deleteUser(user) {
    this.usersFacade.deleteUser(user);
  }
}
