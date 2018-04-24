import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Generic } from '../shared/generic.model';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})
export class PackageDetailComponent implements OnInit {
  package: Generic;
  // id: number;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {

   const id = this.route.snapshot.params['id'];
   console.log('for me', id)
    this.getOnePackage(id);
  }
  getOnePackage(id){
    console.log('what is in id?', id)
    this.apiService.getSingleResource('packages', id).subscribe(resp=> this.package = resp )

  }

}
