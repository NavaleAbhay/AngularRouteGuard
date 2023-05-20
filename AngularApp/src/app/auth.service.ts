import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject=new Subject<any>;
users:any[]=[
  {
    "userId":1,
    "userName":"Abhay",
    "password":"password",
    "role":"Admin"
  },
  {
    "userId":2,
    "userName":"Sahil",
    "password":"password",
    "role":"User"
  },
  {
    "userId":3,
    "userName":"Shubham",
    "password":"password",
    "role":"User"
  },
  {
    "userId":4,
    "userName":"Jayesh",
    "password":"password",
    "role":"Admin"
  }
];
loggedIn:any;
  constructor() { }

  logIn(username:string,password:string):boolean{
    const user=this.users.find((u)=>u.userName ===username && u.password===password)
    if(user){
      this.loggedIn=user;
      this.subject.next(user.role);
      return true;
    }
    return false;
  }

  
}
