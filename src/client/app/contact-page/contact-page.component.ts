import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;

  constructor( private fb: FormBuilder, private apiService: ApiService) { 
    this.createForm()}

  ngOnInit() {
  }

  createForm(){
    console.log('form created')
    this.contactForm = this.fb.group({
      name: '',
      tel: '',
      email:'',
      subject: '',
      message: ''

    })
  }

  contactUs(){
    console.log("submitted")
    this.apiService.postResource('messages', this.contactForm.value)
    this.contactForm.reset();
  }

}
