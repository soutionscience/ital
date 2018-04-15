import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-types-dialog',
  templateUrl: './types-dialog.component.html',
  styleUrls: ['./types-dialog.component.scss']
})
export class TypesDialogComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
     private apiService: ApiService,
    public dialogRef: MatDialogRef<TypesDialogComponent>) {
      this.createForm();
     }

  ngOnInit() {
    console.log(this.data.myId)
  }
  createForm(){
    this.myForm = this.fb.group({
      title: '',
      desc: ''
    });
   }

   onSubmit(){
   this.apiService.postTypes(this.data.routes, this.data.myId, this.myForm.value, this.data.item);
   this.close();
   }
   close(){
     this.dialogRef.close();
   }

}
