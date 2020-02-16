import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule }  from '@cpas/material';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { UiToolbarModule} from '@cpas/ui-toolbar';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiToolbarModule,
    HomeModule,
    UsersModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
