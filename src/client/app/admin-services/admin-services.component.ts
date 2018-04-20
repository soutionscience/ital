import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Generic } from '../shared/generic.model';
import { MatDialog } from '@angular/material';
import { AddImageComponent } from '../add-image/add-image.component';
import { TypesDialogComponent } from '../types-dialog/types-dialog.component';
@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.scss']
})
export class AdminServicesComponent implements OnInit {

  services: Generic[];

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getServices();
  }

  getServices(){
this.apiService.getResource('services').subscribe(resp => this.services = resp)
  }

    addImage(id, route) {
    this.dialog.open(AddImageComponent, {width: '400px', height: 'auto', data: { myId: id, myRoute: route }} );
  }
  addService(id){
    this.dialog.open(TypesDialogComponent, {width: '500px' , height: 'auto', data:{
    myId: id,
    routes: 'services',
    item: 'services'
  }})
  }

}
