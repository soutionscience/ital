import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  constructor(private uploadService: UploadService, 
    private matDialogRef: MatDialogRef<AddImageComponent>) { }
  @Output() myNotify = new EventEmitter<any>()

  ngOnInit() {
  }
  @ViewChild('fileInput') fileInput;
  addFile(): void {
    const fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        const fileToUpload = fi.files[0];
        this.uploadService
            .upload(fileToUpload)
            .subscribe(res => {
                this.myNotify.emit(res)
                console.log('is this the res' , res);
            });
    }
    this.close();
}
close(){
this.matDialogRef.close()
}
}
