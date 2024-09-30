import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { IUserCredentials } from '../../models/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-sign-in',
  standalone: true,
  templateUrl: './signin.component.html',
  imports:[FormsModule, CommonModule],
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  
  credentials: IUserCredentials = { email: '', password: '' };
  signInError: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  signIn() {
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => (this.signInError = true)
    });
  }

}
