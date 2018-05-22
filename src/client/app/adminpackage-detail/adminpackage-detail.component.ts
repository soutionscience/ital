import { Component, OnInit, Input } from '@angular/core';
import { Generic } from '../shared/generic.model';
import { MatDialog } from '@angular/material';
import { PackageDialogComponent } from '../package-dialog/package-dialog.component';
import { TypesDialogComponent } from '../types-dialog/types-dialog.component';
import { AddImageComponent } from '../add-image/add-image.component';

@Component({
  selector: 'app-adminpackage-detail',
  templateUrl: './adminpackage-detail.component.html',
  styleUrls: ['./adminpackage-detail.component.scss']
})
export class AdminpackageDetailComponent implements OnInit {
  @Input()package: Generic[];

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }
  addDays(id){
  this.dialog.open(TypesDialogComponent, {width: '500px' , height: 'auto', data:{
    myId: id,
    routes: 'packages',
    item: 'days'
  }})
  }
  addImage(id, route, method) {
    this.dialog.open(AddImageComponent, {width: '400px', height: 'auto', data: { myId: id, myRoute: route }} );
  }

}
