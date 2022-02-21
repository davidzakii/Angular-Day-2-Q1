import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {
  cardList : any = [{title:"WEB DESIGN",bg:true},{title:"MOPILE DESIGN",bg:false},{title:"LOGO DESIGN",bg:true},{title:"Web APP DEVELOPMENT",bg:false},{title:"PAW DEVELOPMENT",bg:true},{title:"Web APP DEVELOPMENT",bg:false}]

  constructor() { }

  ngOnInit(): void {
  }

}
