import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav;
  constructor() {}

  ngOnInit(): void {}
}
