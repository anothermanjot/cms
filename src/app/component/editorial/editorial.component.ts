import { Component, OnInit, ChangeDetectorRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { EditorialPageService } from 'src/app/service/editorial-page.service';
import { EditorialPage } from 'src/app/model/editorial-page';
import { EditorialRailService } from 'src/app/service/editorial-rail.service';
import { EditorialRail } from 'src/app/model/editorial-rail';
import cache from 'js-cache';
import * as _ from 'lodash';
import { debounce } from 'typescript-debounce-decorator';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from 'src/app/service/platform.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorialComponent implements OnInit {

  pagesCache = new cache();
  pages: EditorialPage[];
  platform: string;
  railsCache = new cache();
  editorialRails = new Array<EditorialRail>();
  columns = ['title', 'startDate', 'endDate', 'actions'];
  selectedTab;
  isMobile = false;

  constructor(private editorialPageSvc: EditorialPageService,
              private route: ActivatedRoute,
              private editorialRailSvc: EditorialRailService,
              private ref: ChangeDetectorRef,
              private platformSvc: PlatformService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.platform = params.get('platform');
      console.log(this.platform);
      if (this.pagesCache.get(this.platform)) {
        this.pages = this.pagesCache.get(this.platform);
        this.tabChange(0);
        return;
      }
      this.editorialPageSvc.fetchAll(this.platform)
      .subscribe(resp => {
         this.pages = resp.data;
         this.pagesCache.set(this.platform, this.pages, 300000);
         this.tabChange(0);
        });
    });

    this.isMobile = this.platformSvc.isMobile();

  }

  tabChange(index: number) {

    console.log(index);

    if (this.railsCache.get(this.pages[index].pageType)) {
      this.editorialRails = this.railsCache.get(this.pages[index].pageType);
      this.selectedTab = index;
      return;
    }

    this.editorialRailSvc.fetchAll(this.pages[index].pageType)
    .subscribe(resp => {
      this.railsCache.set(this.pages[index].pageType, resp.data, 300000);
      console.log('resp.data');
      this.editorialRails = resp.data;
    });
    this.selectedTab = index;
  }

  onListDrop(event) {
    console.log(event);
    const rail = this.editorialRails[event.currentIndex];
    this.editorialRails[event.currentIndex] = this.editorialRails[event.previousIndex];
    this.editorialRails[event.previousIndex] = rail;
    this.editorialRails = _.cloneDeep(this.editorialRails);
  }

  ngAfterViewChecked() {

  //  Workaround: Uncomment this and the error is gone.
  //  if (this.firstTime) {
      this.ref.detectChanges();
 //     this.firstTime = false;
  //  }

  }

  trackBy(index, item) {
    console.log(item);
    return item.sectionId;
  }

}
