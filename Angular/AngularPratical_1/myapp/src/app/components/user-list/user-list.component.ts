import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  public usersService = inject(UsersService)
  
  ngOnInit(): void {
      this.usersService.fetchUserData()
  }

}
