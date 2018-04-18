import { Component, OnInit, ViewChild, Output, EventEmitter, Inject} from '@angular/core';
import { UploadService } from '../services/upload.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  constructor(private uploadService: UploadService,
    private apiService: ApiService, 
    @Inject(MAT_DIALOG_DATA) public data:any,
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
               // this.myNotify.emit(res)
                console.log('is this the res' , res);
                this.apiService.postTypes('packages', this.data.myId, res, 'images' )
            });
    }
    this.close();
}
close(){
this.matDialogRef.close()
}
}
