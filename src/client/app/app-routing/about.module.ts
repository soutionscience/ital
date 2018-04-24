import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from '../about-page/about-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path: '', component: AboutPageComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutPageComponent]
})
export class AboutModule { }
