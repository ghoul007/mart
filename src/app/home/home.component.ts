import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  template: `
  {{_displayLogin}}
  <button mat-raised-button color="primary" routerLink="/login">Login as Manager</button>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  _displayLogin: boolean;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.authStatus.subscribe(
      authStatus => (this._displayLogin = !authStatus.isAuthenticated)
    )
  }

  get displayLogin() {
    return this._displayLogin
  }

}
