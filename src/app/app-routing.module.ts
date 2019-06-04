import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { ForceUpgradeComponent } from './component/force-upgrade/force-upgrade.component';
import { SubscribersComponent } from './component/subscribers/subscribers.component';
import { ContentComponent } from './component/content/content.component';
import { EditorialComponent } from './component/editorial/editorial.component';
import { ImageManagementComponent } from './component/image-management/image-management.component';
import { SettingsComponent } from './component/settings/settings.component';
import { ManagementCenterComponent } from './component/management-center/management-center.component';
import { ContentManagementComponent } from './component/content-management/content-management.component';
import { NotificationJSONComponent } from './component/notification-json/notification-json.component';
import { AnalyticsComponent } from './component/analytics/analytics.component';

const routes: Routes = [
  { path: 'user-management', component: UserDetailComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'force-upgrade', component: ForceUpgradeComponent },
  { path: 'subscribers', component: SubscribersComponent },
  { path: 'content/:type', component: ContentComponent },
  { path: 'editorial/:platform', component: EditorialComponent },
  { path: 'image-management', component: ImageManagementComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'notification-json', component: NotificationJSONComponent },
  { path: 'management-center', component: ManagementCenterComponent },
  { path: 'content-management', component: ContentManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
