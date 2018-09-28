import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: `
  <mat-toolbar color="accent">
  <a mat-button routerLink="/manager/home">home</a>
  <a mat-button routerLink="/manager/users">users</a>
  <a mat-button routerLink="/manager/receipts">receipts</a>
  </mat-toolbar>
  <router-outlet></router-outlet>

  `,
  styles: []
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
