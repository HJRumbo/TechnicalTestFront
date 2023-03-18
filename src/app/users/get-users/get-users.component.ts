import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styles: [
  ]
})
export class GetUsersComponent implements OnInit {

  users!: User[];
  search: string = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    //this.usersService.getUsers().subscribe(resp => this.users = resp.items);
  }

  GetUsers() {
    this.usersService.getUsers(this.search).subscribe(resp => this.users = resp.items);
  }

}
