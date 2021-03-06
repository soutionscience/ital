import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {path: '', loadChildren: './website.module#WebsiteModule'},
  {path: 'admin', loadChildren: './admin.module#AdminModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'admin', redirectTo: 'packages', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[RouterModule , AppComponent],
  declarations:[AppComponent]
})
export class AppRoutingModule { }
