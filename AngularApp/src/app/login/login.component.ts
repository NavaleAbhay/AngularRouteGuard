import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user:User |any={
  contactNumber:"",
  password:""
};
validUser:boolean=false;
constructor(private svc:AuthService,private router:Router){}


logIn(){
  this.svc.logIn(this.user).subscribe((response)=>{
    localStorage.setItem('jwtToken', response.token);
  if(this.user){
    this.validUser=true;
  }
    const role = this.svc.getRoleFromToken();
    console.log(role)
    if (role == "farmer") {
      const farmerId = this.svc.getFarmerIdFromToken();
      console.log(farmerId);
    } 
    if (role == "employee") {
      const employeeId = this.svc.getEmployeeIdFromToken();
      console.log(employeeId);
      // this.router.navigate(['/login']);
    }
    if (role == "merchant") {
      const merchantId = this.svc.getMerchantIdFromToken();
      console.log(merchantId);
      // this.router.navigate(['merchants/dashboard', merchantId]);
    }
    if (role == "transport") {
      const transportId = this.svc.getTransportIdFromToken();
      console.log(transportId);
      // this.router.navigate(['transports/dashboard', transportId]);
    }
    if (role == "admin") {
      const adminId = this.svc.getAdminIdFromToken();
      console.log(adminId);
      // this.router.navigate(['default', adminId]);
    }
  
  })

     this.router.navigate(['/home']);
    return true;
  }
}

