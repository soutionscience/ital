import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Generic } from '../shared/generic.model';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {
services: Generic[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getServices();
  }

  getServices(){
    this.apiService.getResource('services').subscribe(resp=> this.services = resp)
  }
}
