import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HomeMenuComponent } from '../home-menu/home-menu.component';
import { BannerComponent } from '../banner/banner.component';
import { BottomComponent } from '../bottom/bottom.component';
import { FooterComponent } from '../footer/footer.component';
import { IntroComponent } from '../intro/intro.component';
import { PackageModule } from './package.module';
import { PackagesComponent } from '../packages/packages.component';
import {PackageDetailComponent} from '../package-detail/package-detail.component';
import { SideComponent } from '../side/side.component';
import { SidesComponent } from '../sides/sides.component';
import { LogoComponent } from '../logo/logo.component';

const routes: Routes = [
  {path: '',  component: HomeComponent, children: [
    { path: '', loadChildren: './welcome.module#WelcomeModule'},
    {path: 'services', loadChildren: './service.module#ServiceModule'},
  {path: 'about-us', loadChildren: './about.module#AboutModule'},
  {path: 'contact-us', loadChildren: './contact.module#ContactModule'},
   {path: 'packages', loadChildren: './package.module#PackageModule'},
   {path: 'gallery', loadChildren: './gallery.module#GalleryModule'},
{path: 'packagedetail/:id', component: PackageDetailComponent}] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, HomeMenuComponent,
    BannerComponent, BottomComponent, FooterComponent, IntroComponent, PackageDetailComponent, SideComponent, LogoComponent]
})
export class WebsiteModule { }
