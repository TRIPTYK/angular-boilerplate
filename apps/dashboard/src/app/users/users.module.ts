import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '@cpas/material';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule, MaterialModule, FormsModule],
  exports: [UsersComponent]
})
export class UsersModule {}
