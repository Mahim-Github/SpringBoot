import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User = {
    name: '',
    email: ''
  };
  isEditMode = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  selectUser(user: User): void {
    this.selectedUser = {...user};
    this.isEditMode = true;
  }

  createOrUpdateUser(user: User): void {
    if (user.id) {
      this.userService.updateUser(user.id, user)
        .subscribe(() => {
          this.loadUsers();
          this.resetForm();
        });
    } else {
      this.userService.createUser(user)
        .subscribe(() => {
          this.loadUsers();
          this.resetForm();
        });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id)
      .subscribe(() => {
        this.loadUsers();
      });
  }

  resetForm(): void {
    this.selectedUser = {
      name: '',
      email: ''
    };
    this.isEditMode = false;
  }
}