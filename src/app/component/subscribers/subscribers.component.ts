import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SubscriberService } from 'src/app/service/subscriber.service';
import { Subscriber } from 'src/app/model/subscriber';
import { MatTableDataSource, MatPaginator, MatTable } from '@angular/material';
import { SubscriberStatus } from 'src/app/constants/SubscriberStatus';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent {


  SubscriberStatus = SubscriberStatus;
  subscribers: MatTableDataSource<Subscriber> = new MatTableDataSource([]);
  private columns = [
    'id', 'name', 'pvr', 'isPremium', 'status', 'lastUpdated',
    'action', 'entitlements', 'deviceUpdate'
  ];
  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatTable,{ static: true }) table: MatTable<any>;
  public isMobile = false;
  public _query = '';
  public _status: SubscriberStatus = SubscriberStatus.ALL;
  public isRequesting: boolean;
  public resultSize = 0;

  constructor(private subscriberService: SubscriberService) { }

  ngAfterViewInit() {
    this.getSubscribers();
    this.paginator.page
      .subscribe(p => {
        this.getSubscribers();
      });
  }

  set query(q) {
    this._query = q;
    this.getSubscribers();
  }

  get query() {
    return this._query;
  }

  set status(s) {
    this._status = s;
    this.getSubscribers();
  }

  get status() {
    return this._status;
  }

  getSubscribers() {
    if (this.isRequesting) {
      return;
    }
    let status = this._status;
    this.isRequesting = true;
    if (this._status === SubscriberStatus.ALL) {
      status = null;
    }
    const start = this.paginator.pageIndex * this.paginator.pageSize;
    this.subscriberService.getSubscribers(this._query, status, start, this.paginator.pageSize).subscribe((res) => {
      this.subscribers.data = res.data;
      this.isRequesting = false;
      this.resultSize = res.recordsTotal;
    });
  }

}
