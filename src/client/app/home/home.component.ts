import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDeactivate() {
    console.log('is deactivate called?')
     document.body.scrollTop = 0;
    // Alternatively, you can scroll to top by using this other call:
     window.scrollTo(0, 0)
  }

}
