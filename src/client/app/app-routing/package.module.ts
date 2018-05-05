import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from '../packages/packages.component';
import { PackagePageComponent } from '../package-page/package-page.component';
import { SidesComponent } from '../sides/sides.component';


const routes: Routes = [{
  path: '', component: PackagePageComponent
}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PackagePageComponent, SidesComponent]
})
export class PackageModule { }
