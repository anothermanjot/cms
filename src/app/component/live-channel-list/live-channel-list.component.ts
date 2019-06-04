import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTable } from '@angular/material';
import { LiveChannelService } from 'src/app/service/live-channel.service';
import { LiveChannel } from 'src/app/model/live-channel';

@Component({
  selector: 'cms-live-channel-list',
  templateUrl: './live-channel-list.component.html',
  styleUrls: ['./live-channel-list.component.css']
})
export class LiveChannelListComponent implements AfterViewInit {

  liveChannels: MatTableDataSource<LiveChannel> = new MatTableDataSource([]);
  public columns = [
    'circle', 'landscape', 'mm_id', 'title',
    'languages', 'hd/sd', 'contract_name'
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  public isMobile = false;
  public queryString = '';
  public ott = true;
  public enabled = true;
  public isRequesting: boolean;
  public resultSize = 0;


  constructor(private channelService: LiveChannelService) { }

  ngAfterViewInit() {
    this.getChannels();
    this.paginator.page
      .subscribe(p => {
        this.getChannels();
      });
  }

  getChannels() {

    if (this.isRequesting) {
      return;
    }
    const filters = {
      ott: this.ott,
      enabled: this.enabled,
      queryString: this.queryString
    };
    const start = this.paginator.pageIndex * this.paginator.pageSize;
    this.isRequesting = true;
    this.channelService.getAllChannels(filters, start, this.paginator.pageSize).subscribe((res) => {
      console.log('getALLChannels::');
      this.liveChannels.data = res.data;
      this.isRequesting = false;
      console.log(res);
      this.resultSize = res.recordsTotal;
    });

  }

}
