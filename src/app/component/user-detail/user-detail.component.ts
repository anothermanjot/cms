import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/user';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, startWith, tap } from 'rxjs/operators';
import { PlatformService } from 'src/app/service/platform.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private users: MatTableDataSource<User> = new MatTableDataSource([]);
  private columns = ['Name', 'Role', 'Email', 'Action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public isMobile = false;
  public _isEnabled = true;

  constructor(private userService: UserService, private platformSvc: PlatformService) { }

  ngOnInit() {


    this.isMobile = this.platformSvc.isMobile();
    this.userService.getAll(this.isEnabled).subscribe((res) => {
      console.log('getALL::' + res);
      this.users = new MatTableDataSource(res);
      this.users.paginator = this.paginator;
    });
  }

  set isEnabled(isEnabled) {
    this._isEnabled = isEnabled;
    this.userService.getAll(isEnabled).subscribe((res) => {
      console.log('getALL::' + res);
      this.users = new MatTableDataSource(res);
      this.users.paginator = this.paginator;
    });
  }

  get isEnabled() {
    return this._isEnabled;
  }
}
