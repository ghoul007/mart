import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `

  <mat-toolbar color="accent">
  <a mat-button routerLink="/inventory/dashboard">Dashboard</a>
  <a mat-button routerLink="/inventory/stock">Stock</a>
  <a mat-button routerLink="/inventory/product">Products</a>
  <a mat-button routerLink="/inventory/categories">Categoris</a>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
