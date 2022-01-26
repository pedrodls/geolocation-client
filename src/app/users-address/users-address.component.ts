import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-address',
  templateUrl: './users-address.component.html',
  styleUrls: ['./users-address.component.scss']
})
export class UsersAddressComponent implements OnInit {

  users: Array<User> = new Array<User>();

  constructor(private userService: UsersService
  ) {

  }

  ngOnInit(): void {
    this.userService.all().subscribe({
      next: (u) => {
        this.users = u;
      },
      error: () => this.users = []
    })
  }


}
