import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  nameSkills : any = [{name:"HTML",level:"92%"},
  {name:"CSS",level:"90%"},
  {name:"JAVASCRIPT",level:"70%"},
  {name:"REACT",level:"50%"},
  {name:"ANGULAR",level:"60%"},
  {name:"Bootstrabe",level:"75%"},
  {name:"Nodejs",level:"40%"},
  {name:"Photshop",level:"30%"},
  {name:"Wordpress",level:"20%"},
  {name:"Adope XD",level:"25%"}];
  constructor() { }
  userName : string = "david";
  showUserName(){
    this.userName = "zaki"
  }
  ngOnInit(): void {
  }

}
