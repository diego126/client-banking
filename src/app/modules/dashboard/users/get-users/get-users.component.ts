import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../../core/services/users.service';
import {User} from '../../../../core/models/users/User';
import {Customer} from '../../../../core/models/customers/Customer';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe(res => {
      this.users = res;
    });
  }
}
