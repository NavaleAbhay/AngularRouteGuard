import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './user';
import { HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// users:User[]=[
//   {
//     "userId":1,
//     "userName":"Abhay",
//     "password":"password",
//     "role":"Admin"
//   },
//   {
//     "userId":2,
//     "userName":"Sahil",
//     "password":"password",
//     "role":"User"
//   },
//   {
//     "userId":3,
//     "userName":"Shubham",
//     "password":"password",
//     "role":"User"
//   },
//   {
//     "userId":4,
//     "userName":"Jayesh",
//     "password":"password",
//     "role":"Admin"
//   }
// ];
//  loggedIn:any;

  // logIn(username:string,password:string):boolean{
  //   const user=this.users.find((u)=>u.userName ===username && u.password===password)
  //   if(user){
  //     this.loggedIn=user;
  //     localStorage.setItem("role",user.role)
  //     return true;
  //   }
  //   return false;
  // }
  constructor(private httpClient:HttpClient,private jwtHelper:JwtHelperService) { }

  logIn(user:User):Observable<any>{
    console.log("inside request")
    let url ="http://localhost:5148/api/auth/authenticate";
      return this.httpClient.post<User>(url,user);
      }

      getRoleFromToken(): string {
        const token = localStorage.getItem('jwtToken');
        if (token) {
          const decodedToken: any = this.jwtHelper.decodeToken(token)
          return decodedToken.role;
        }
        return '';
      }
      getFarmerIdFromToken(): number {
        const token :any = localStorage.getItem('jwtToken');
        const decodedToken: any = this.jwtHelper.decodeToken(token)
        return decodedToken.farmerId;
      }
      getAdminIdFromToken(): number {
        const token :any = localStorage.getItem('jwtToken');
        const decodedToken: any = this.jwtHelper.decodeToken(token)
        return decodedToken.adminId;
      }
      getEmployeeIdFromToken(): number {
        const token :any = localStorage.getItem('jwtToken');
        const decodedToken: any = this.jwtHelper.decodeToken(token)
        return decodedToken.employeeId;
      }
      getMerchantIdFromToken(): number {
        const token :any = localStorage.getItem('jwtToken');
        const decodedToken: any =this.jwtHelper.decodeToken(token)
        return decodedToken.merchantId;
      }
      getTransportIdFromToken(): number {
        const token :any = localStorage.getItem('jwtToken');
        const decodedToken: any = this.jwtHelper.decodeToken(token)
        return decodedToken.transportId;
      }
}
