import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HomeMenuComponent } from '../home-menu/home-menu.component';
import { BannerComponent } from '../banner/banner.component';
import { BottomComponent } from '../bottom/bottom.component';
import { FooterComponent } from '../footer/footer.component';
import { IntroComponent } from '../intro/intro.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    { path: 'home', loadChildren: './welcome.module#WelcomeModule'}] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, HomeMenuComponent, BannerComponent, BottomComponent, FooterComponent, IntroComponent]
})
export class WebsiteModule { }
