import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Generic } from '../shared/generic.model';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
 Gallery: Generic[];
  constructor(private apiService: ApiService) {  this.getImages()}

  ngOnInit() {
   
  }
 getImages(){
   this.apiService.getResource('gallery').subscribe(resp=> this.Gallery = resp)
 }
}
