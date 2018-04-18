import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { PackagesComponent } from '../packages/packages.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent,  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [WelcomeComponent, PackagesComponent, SideMenuComponent]
})
export class WelcomeModule { }
