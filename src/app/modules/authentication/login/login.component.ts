import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../core/models/users/User';
import {UsersService} from '../../../core/services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {
  }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.user = new User(this.loginForm.value);
    this.userService.login(this.user).subscribe(
      res => {
        this.router.navigate(['dashboard']);
      }
    );
  }
}
