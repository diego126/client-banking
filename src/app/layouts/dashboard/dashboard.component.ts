import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../core/services/users.service';
import {Router} from '@angular/router';
import {UserAuth} from '../../core/models/users/UserAuth';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: UserAuth;
  permissions = [];

  constructor(private userService: UsersService, private router: Router, private permissionService: NgxPermissionsService) {
    this.userService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.loadPermissions();
  }

  loadPermissions() {
    let i;
    for (i = 0; i < this.currentUser.claims.length; i++) {
      if (this.currentUser.claims[i].value === 'true') {
        this.permissions.push(this.currentUser.claims[i].type);
      }

    }
    this.permissionService.loadPermissions(this.permissions);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
