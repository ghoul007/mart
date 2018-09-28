import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <button mat-raised-button color="primary" routerLink="/manager">Login as Manager</button>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
