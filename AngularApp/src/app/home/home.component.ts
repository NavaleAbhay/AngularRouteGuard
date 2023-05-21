import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  constructor(private svc:AuthService){}
role=this.svc.getRoleFromToken();
statusAbhay:boolean=false;
statusSahil:boolean=false;
ngOnInit(): void {

if(this.role=="farmer"){
  this.statusAbhay=true;
  this.statusAbhay=true;
}
else if(this.role=="admin"){
  this.statusSahil=true;
  this.statusSahil=true;
}


}

}
