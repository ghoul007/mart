import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: `
  <mat-toolbar color="accent">
  <a mat-button routerLink="/manager/home">home</a>
  <a mat-button routerLink="/manager/users">users</a>
  <a mat-button routerLink="/manager/receipts">receipts</a>

  <span class="flex-spacer" [style.width.%]=100></span>
  <button mat-mini-fab routerLink="/inventory" matTooltip="Inventory" aria-label="Inventory"><mat-icon>list</mat-icon></button>
  <button mat-mini-fab routerLink="/pos" matTooltip="POS" aria-label="POS"><mat-icon>shopping_cart</mat-icon></button>

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
