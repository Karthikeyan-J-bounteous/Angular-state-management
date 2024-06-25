import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})

export class UserSearchComponent implements OnInit {
  
  @ViewChild('searchInput') searchInput: ElementRef | undefined;
  users: User[] | unknown = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    fromEvent(this.searchInput?.nativeElement, 'keyup').pipe(
      debounceTime(300),
      map((event: any) => event.target.value),
      distinctUntilChanged(),
      filter(query => query.length > 2),
      switchMap(query => this.userService.searchUsers(query))
    ).subscribe(users => {
      this.users = users;
    });
  }
}
