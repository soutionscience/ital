import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HomeMenuComponent } from '../home-menu/home-menu.component';
import { BannerComponent } from '../banner/banner.component';
import { BottomComponent } from '../bottom/bottom.component';

const routes: Routes = [
  {path: '', component: HomeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, HomeMenuComponent, BannerComponent, BottomComponent]
})
export class WebsiteModule { }
