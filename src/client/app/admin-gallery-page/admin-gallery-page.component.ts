import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddImageGalleryComponent } from '../add-image-gallery/add-image-gallery.component';
import { Generic } from '../shared/generic.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-gallery-page',
  templateUrl: './admin-gallery-page.component.html',
  styleUrls: ['./admin-gallery-page.component.scss']
})
export class AdminGalleryPageComponent implements OnInit {

  gallery: Generic[];

  constructor(private dialog: MatDialog, private apiService: ApiService) { this.getImages()}

  ngOnInit() {
  }
  getImages(){
  this.apiService.getResource('gallery').subscribe(res=> this.gallery = res)
  }
  

  addImage(id, route, method) {
    this.dialog.open(AddImageGalleryComponent, {width: '400px', height: 'auto', data: { myMethod: method, myId: id, myRoute: route }} );
  }

}
