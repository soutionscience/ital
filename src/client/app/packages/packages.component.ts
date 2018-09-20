import { Component, OnInit } from '@angular/core';
import { Generic } from '../shared/generic.model';
import { ApiService } from '../services/api.service';
import {baseUrl} from '../shared/baseUrl'

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
 packages: Generic[];
 package: Generic;
 url: String;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPackages();
    this.url = baseUrl
  }
  getPackages(){
    this.apiService.getResource('packages').subscribe(resp=> this.packages = resp)
  }

  clickedRoutes(p){
  console.log('this is ', p);
  }
  

}
