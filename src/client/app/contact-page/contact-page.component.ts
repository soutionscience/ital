import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;
  form: boolean;
  sent: boolean;
  spinner: boolean;

  constructor( private fb: FormBuilder, private apiService: ApiService) { 
   this.createForm();
   this.form = true;
   this.sent = false;
   this.spinner = false;
  }

  ngOnInit() {
  }

  createForm(){
    console.log('form created')
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)] ],
      tel: ['', [Validators.required, Validators.minLength(6)] ],
      email:['', [Validators.required, Validators.email] ],
      subject: '',
      message: ''

    })
  }

  contactUs() {
    this.spinner = true;
    this.form = false;
  this.apiService.postResource('messages', this.contactForm.value).subscribe(resp => {
    if(resp){
      this.sent = true;
      this.spinner = false;
    }
     console.log('is this it? ', resp);
    });
    this.contactForm.reset();
  }
  messageSent(){
    this.contactForm.reset;
    this.sent= false;
    this.form = true;
  }

}
