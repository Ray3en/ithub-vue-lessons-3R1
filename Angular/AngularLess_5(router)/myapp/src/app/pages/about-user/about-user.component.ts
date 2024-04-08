import { Component, OnInit } from '@angular/core';
import { AboutUsersService, User } from '../../services/about-users.service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-about-user',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './about-user.component.html',
  styleUrl: './about-user.component.css'
})
export class AboutUserComponent implements OnInit{
  constructor (public userService: AboutUsersService, private routes: ActivatedRoute){}

  public user = this.userService.user

  ngOnInit(): void {
    this.userService.getUser(this.routes.snapshot.params['id'])
  }
}
