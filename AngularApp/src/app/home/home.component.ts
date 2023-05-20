import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

statusAbhay:boolean=false;
statusSahil:boolean=false;
ngOnInit(): void {
  this.statusAbhay=false ;
  this.statusSahil=true ;

}

}
