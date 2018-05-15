import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminAreaComponent } from '../admin-area/admin-area.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminPackagesComponent } from '../admin-packages/admin-packages.component';
import { PackagesComponent } from '../packages/packages.component';
import { PackageDialogComponent } from '../package-dialog/package-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminpackageDetailComponent } from '../adminpackage-detail/adminpackage-detail.component';
import { AddImageComponent } from '../add-image/add-image.component';
import { AdminServicesComponent } from '../admin-services/admin-services.component';
import { AdminGalleryPageComponent } from '../admin-gallery-page/admin-gallery-page.component';

const routes: Routes = [
  {path: '', component: AdminAreaComponent, children:[
    {path: '', component: DashboardComponent},
    {path: 'packages', component: AdminPackagesComponent},
    {path: 'services', component: AdminServicesComponent}
  ]}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminAreaComponent, SidebarComponent, DashboardComponent,
     AdminPackagesComponent, AdminpackageDetailComponent, AdminServicesComponent, AdminGalleryPageComponent],

     exports:[RouterModule],
     entryComponents:[ ]
})
export class AdminModule { }
