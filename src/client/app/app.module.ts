import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { restangularConfigFactory } from './shared/restangular.config';
import {RestangularModule} from 'ngx-restangular';
import { ApiService } from './services/api.service';
import { MatDialogModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PackageDialogComponent } from './package-dialog/package-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypesDialogComponent } from './types-dialog/types-dialog.component';
import { AddImageComponent } from './add-image/add-image.component';
import { UploadService } from './services/upload.service';




@NgModule({
  declarations: [PackageDialogComponent, TypesDialogComponent, AddImageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestangularModule.forRoot(restangularConfigFactory),
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[PackageDialogComponent, TypesDialogComponent, AddImageComponent],

  providers: [ApiService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
