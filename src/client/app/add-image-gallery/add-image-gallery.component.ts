import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-image-gallery',
  templateUrl: './add-image-gallery.component.html',
  styleUrls: ['./add-image-gallery.component.scss']
})
export class AddImageGalleryComponent implements OnInit {

  constructor(private uploadService: UploadService, private apiService: ApiService,
   private matDialogRef:MatDialogRef<AddImageGalleryComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
  }
  @ViewChild('fileInput') fileInput
  addFile(): void {
    console.log('are you hitting this?')
    const fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        const fileToUpload = fi.files[0];
        this.uploadService
            .upload(fileToUpload)
            .subscribe(res => {
               // this.myNotify.emit(res)
                console.log('is this the res' , res);
                
                this.apiService.postResource('gallery', res)
            });
    }
    this.close();
}
close(){
  this.matDialogRef.close()
  }

}
