import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {SingleUploadMediaComponent} from './single-upload-media/single-upload-media.component';
import {MultipleUploadMediaComponent} from './multiple-upload-media/multiple-upload-media.component';
import {MediaPageComponent} from './media-page/media-page.component';
import { DashboardExpertComponent } from './dashboard-expert/dashboard-expert.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardExpertComponent},
  {path: 'singleuploadmedia', component: SingleUploadMediaComponent},
  {path: 'multipleuploadmedia', component: MultipleUploadMediaComponent},
  {path: 'mediapage', component: MediaPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

export const appRouterModule = RouterModule.forRoot(appRoutes, {useHash: true});
