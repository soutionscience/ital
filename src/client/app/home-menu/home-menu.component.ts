import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {
  shown = false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.shown = !this.shown;
    console.log(this.shown);
  }

}
