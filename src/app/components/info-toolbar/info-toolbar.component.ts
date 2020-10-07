import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserState } from 'src/app/store/user/user.state';

@Component({
  selector: 'app-info-toolbar',
  templateUrl: './info-toolbar.component.html',
  styleUrls: ['./info-toolbar.component.scss']
})
export class InfoToolbarComponent implements OnInit {
  
  @Select(UserState.getUserData) $userData : Observable<User>;

  constructor() { }

  ngOnInit(): void {
  }

}
