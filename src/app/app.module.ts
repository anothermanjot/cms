import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './component/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {DragDropModule, CDK_DRAG_CONFIG} from '@angular/cdk/drag-drop';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatMenuModule, MatGridListModule,
  MatTableModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatExpansionModule, MatTabsModule
} from '@angular/material';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { SubscribersComponent } from './component/subscribers/subscribers.component';
import { ForceUpgradeComponent } from './component/force-upgrade/force-upgrade.component';
import { ContentComponent } from './component/content/content.component';
import { EditorialComponent } from './component/editorial/editorial.component';
import { ImageManagementComponent } from './component/image-management/image-management.component';
import { ManagementCenterComponent } from './component/management-center/management-center.component';
import { NotificationJSONComponent } from './component/notification-json/notification-json.component';
import { SettingsComponent } from './component/settings/settings.component';
import { AnalyticsComponent } from './component/analytics/analytics.component';
import { ContentManagementComponent } from './component/content-management/content-management.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { BrandListComponent } from './component/brand-list/brand-list.component';
import { SeriesListComponent } from './component/series-list/series-list.component';
import { VodListComponent } from './component/vod-list/vod-list.component';
import { VodDetailComponent } from './component/vod-detail/vod-detail.component';
import { BrandDetailComponent } from './component/brand-detail/brand-detail.component';
import { SeriesDetailComponent } from './component/series-detail/series-detail.component';
import { LiveChannelListComponent } from './component/live-channel-list/live-channel-list.component';
import { EpgListComponent } from './component/epg-list/epg-list.component';
import { OnDemandListComponent } from './component/on-demand-list/on-demand-list.component';
import { GenreListComponent } from './component/genre-list/genre-list.component';
import { RatingListComponent } from './component/rating-list/rating-list.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { SubscriptionPackageListComponent } from './component/subscription-package-list/subscription-package-list.component';
import { TrackerComponent } from './component/tracker/tracker.component';
import { KeysPipe } from './pipe/keys.pipe';
import { DeviceDetectorService } from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    UserDetailComponent,
    SubscribersComponent,
    ForceUpgradeComponent,
    ContentComponent,
    EditorialComponent,
    ImageManagementComponent,
    ManagementCenterComponent,
    NotificationJSONComponent,
    SettingsComponent,
    AnalyticsComponent,
    ContentManagementComponent,
    BrandListComponent,
    SeriesListComponent,
    VodListComponent,
    VodDetailComponent,
    BrandDetailComponent,
    SeriesDetailComponent,
    LiveChannelListComponent,
    EpgListComponent,
    OnDemandListComponent,
    GenreListComponent,
    RatingListComponent,
    CategoryListComponent,
    SubscriptionPackageListComponent,
    TrackerComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatTabsModule,
    DragDropModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
  },
  DeviceDetectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
