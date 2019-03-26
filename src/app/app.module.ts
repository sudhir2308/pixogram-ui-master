import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule , MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule,
  MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { appRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { LeftnavComponent } from './shared/components/leftnav/leftnav.component';
import { DashboardExpertComponent } from './dashboard-expert/dashboard-expert.component';
import { UserstoreService } from './shared/services/userstore.service';
import { HttpInterceptor } from './shared/services/httpinterceptor';
import { HttpModule, Http } from '@angular/http';
import {FileuploadService} from './shared/services/fileupload.service';

import { SingleUploadMediaComponent } from './single-upload-media/single-upload-media.component';
import { MultipleUploadMediaComponent } from './multiple-upload-media/multiple-upload-media.component';
import { MediaPageComponent } from './media-page/media-page.component';
import { UploadMediaFileComponent } from './upload-media-file/upload-media-file.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LeftnavComponent,
    DashboardExpertComponent,
    SingleUploadMediaComponent,
    MultipleUploadMediaComponent,
    MediaPageComponent,
    MyDialogComponent,
    UploadMediaFileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    appRouterModule,
    HttpModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
    ],
  providers: [UserstoreService, HttpInterceptor, FileuploadService],
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent]
})
export class AppModule { }
