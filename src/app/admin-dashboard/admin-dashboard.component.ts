import { Component, OnInit } from '@angular/core';
import { Months } from '../models/months';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  users: Array<User> = new Array<User>();

  months: Array<any> = new Array<any>();
  years: Array<any> = new Array<any>();
  weeks: Array<any> = new Array<any>();

  filterYear = false;
  filterMonth = false;

  constructor(private userService: UsersService
  ) {

  }

  ngOnInit(): void {
    this.filtingAll()
  }

  filtingAll() {
    this.users = []

    this.filterMonth = false;

    this.filterYear = false;

    this.userService.all().subscribe({
      next: (users) => {
        users.forEach(user => {
          user.createdAt = this.convertToDate(user.createdAt)
          this.users.push(user)
        })
      },
      error: () => this.users = []
    })
  }

  convertToDate(timestamp: any) {
    const date = new Date(timestamp);

    let months = new Months().months;

    if (this.months.indexOf(months[date.getMonth()]) == -1)
      this.months.push(months[date.getMonth()]);

    if (this.years.indexOf(date.getFullYear()) == -1)
      this.years.push(date.getFullYear());


    return date.toLocaleDateString();
  }


  filtingYear(e: any) {

    this.users = []

    this.userService.all().subscribe({
      next: (users) => {
        users.forEach(user => {
          user.createdAt = this.convertToDate(user.createdAt)
          if (user.createdAt.split('/')[2] == e.target.value)
            this.users.push(user)
        })
      },
      error: () => this.users = []
    })
  }

  filtingMonth(e: any) {

    this.users = []

    let months = new Months().months;

    this.userService.all().subscribe({
      next: (users) => {
        users.forEach(user => {
          user.createdAt = this.convertToDate(user.createdAt)
          if (months[parseInt(user.createdAt.split('/')[1]) - 1] == e.target.value)
            this.users.push(user)
        })
      },
      error: () => this.users = []
    })
  }

  filtingWeek() {

    this.users = []

    const current = new Date()

    current.setDate((current.getDate() - current.getDay()));

    for (var i = 0; i < 7; i++) {
      current.setDate(current.getDate() + 1).toLocaleString();

      this.weeks.push(current.toLocaleDateString())
    }

    this.userService.all().subscribe({
      next: (users) => {
        users.forEach(user => {
          user.createdAt = this.convertToDate(user.createdAt)
          if (this.weeks.includes(user.createdAt))
            this.users.push(user)
        })
      },
      error: () => this.users = []
    })
  }

  filting(e: any) {

    if (e.target.value == 'all') {
      this.filtingAll()
    }

    if (e.target.value == 'year') {
      this.filterMonth = false;
      this.filterYear = true;
    }

    if (e.target.value == 'month') {
      this.filterYear = false;
      this.filterMonth = true;
    }

    if (e.target.value == 'week') {
      this.filterMonth = false;
      this.filterYear = false;

      this.filtingWeek()
    }
  }

}
