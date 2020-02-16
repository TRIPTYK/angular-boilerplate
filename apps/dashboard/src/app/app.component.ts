import { Component } from '@angular/core';

@Component({
  selector: 'cpas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/users', icon: 'face', label: 'Users' },
  ];
  title = 'dashboard';
}
