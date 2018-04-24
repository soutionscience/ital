import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { Routes, RouterModule } from '@angular/router';
 const routes: Routes =[
   {path: '', component: ContactPageComponent}
 ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactPageComponent]
})
export class ContactModule { }
