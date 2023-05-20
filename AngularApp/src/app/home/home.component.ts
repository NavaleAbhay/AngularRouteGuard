import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
role=localStorage.getItem("role");
statusAbhay:boolean=false;
statusSahil:boolean=false;
ngOnInit(): void {

if(this.role=="Admin"){
  this.statusAbhay=true;
  this.statusAbhay=true;
}
else{
  this.statusSahil=false;
  this.statusSahil=false;
}


}

}
