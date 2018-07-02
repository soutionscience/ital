import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() addEvent = new EventEmitter();

  constructor(private fb: FormBuilder, private apiService: ApiService, public dialogRef: MatDialogRef<PackageDialogComponent> ) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
   this.myForm = this.fb.group({
     title: '',
     shortdesc: '',
     desc: ''
   });
  }
  onSubmit(){
    console.log('submiting ', this.myForm.value);
    this.apiService.postResource('packages', this.myForm.value);
    this.addEvent.emit(null);
    this.close();

  }
  close(){
    this.dialogRef.close();
  }

}
