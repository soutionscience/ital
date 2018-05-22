import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from '../gallery-page/gallery-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path: '', component: GalleryPageComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GalleryPageComponent]
})
export class GalleryModule { }
