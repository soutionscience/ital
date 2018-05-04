import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Generic } from '../shared/generic.model';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.scss']
})
export class PackagePageComponent implements OnInit {
  packages: Generic[];
  selected: Generic;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPackages();
  }

  getPackages(){
    this.apiService.getResource('packages')
    .subscribe(resp=> this.packages = resp)
  }
setSelected(p){
  console.log("clicking selected")
  this.selected = p;

}
}
