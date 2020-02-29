import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users/users.service';
import { StateModule } from './state/state.module';
@NgModule({
  imports: [CommonModule, HttpClientModule, StateModule],
  providers: [UsersService]
})
export class CoreDataModule {}
