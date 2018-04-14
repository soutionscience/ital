import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { restangularConfigFactory } from './shared/restangular.config';
import {RestangularModule} from 'ngx-restangular';
import { ApiService } from './services/api.service';
import { MatDialogModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './upload/upload.component';
import { PackageDialogComponent } from './package-dialog/package-dialog.component';


@NgModule({
  declarations: [PackageDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestangularModule.forRoot(restangularConfigFactory),
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents:[PackageDialogComponent],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
