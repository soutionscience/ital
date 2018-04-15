import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-package-dialog',
  templateUrl: './package-dialog.component.html',
  styleUrls: ['./package-dialog.component.scss']
})
export class PackageDialogComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, public dialogRef: MatDialogRef<PackageDialogComponent> ) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
   this.myForm = this.fb.group({
     title: '',
     desc: ''
   });
  }
  onSubmit(){
    console.log('submiting ', this.myForm.value);
    this.apiService.postResource('packages', this.myForm.value);
    this.close();
  }
  close(){
    this.dialogRef.close();
  }

}
