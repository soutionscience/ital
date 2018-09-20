import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(fileToUpload: any) {
    const input = new FormData();
    input.append('file', fileToUpload);

    return this.http
       // .post('/uploads', input);
      .post('https://ital.herokuapp.com/api/uploads', input)
}


}
