import { Component, OnInit } from '@angular/core';
import { Generic } from '../shared/generic.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
 packages: Generic[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPackages();
  }
  getPackages(){
    this.apiService.getResource('packages').subscribe(resp=> this.packages = resp)
  }

}
