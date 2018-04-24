import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServicePageComponent } from '../service-page/service-page.component';


const routes: Routes = [{
  path: '', component: ServicePageComponent
}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ ServicePageComponent]
})
export class ServiceModule { }
