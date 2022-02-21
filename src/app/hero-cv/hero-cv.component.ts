import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-cv',
  templateUrl: './hero-cv.component.html',
  styleUrls: ['./hero-cv.component.css']
})
export class HeroCVComponent implements OnInit {
  ownerCvName : string = "David Zaki" ;
  jobTitle : string = "Wep Developer & Design";
  imageItem : string = "../assets/images.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
