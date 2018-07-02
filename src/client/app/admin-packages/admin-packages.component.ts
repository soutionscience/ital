import { Component, OnInit } from '@angular/core';
import { Generic } from '../shared/generic.model';
import { ApiService } from '../services/api.service';
import { MatDialog, MatIcon } from '@angular/material';
import { PackageDialogComponent } from '../package-dialog/package-dialog.component';


@Component({
  selector: 'app-admin-packages',
  templateUrl: './admin-packages.component.html',
  styleUrls: ['./admin-packages.component.scss']
})
export class AdminPackagesComponent implements OnInit {
  packages: Generic[];
  package: Generic;
  dialogRef: any;

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getPackages();
  }

  getPackages() {
    this.apiService.getResource('packages').subscribe(resp => this.packages = resp);
  }
  // addNew(){
  //   console.log('adding new');
  //   this.dialog.open(UploadComponent, { width: '700px', height: 'auto'} );

  // }
  addNew() {
    this.dialog.open(PackageDialogComponent, {
      width: '500px', height: 'auto', data: {
        dataKey: 'packages' // shows which route to use when posting.
      }
    }).afterClosed().subscribe(() => this.getPackages());
    // this.dialogRef = this.dialog.open(PackageDialogComponent);
    // this.dialogRef.afterClosed().subscribe(() => {
    //   console.log('closed by adding');
    // });
  }




  details(p) { this.package = p; }

  deleteAll() {
    this.apiService.deleteAll('packages');
  }
  myReload() {
    this.getPackages();
  }

}
