import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  // router: any;
  admin = {
    userName: "",
    password: "",
  };
  constructor(public api:ApiService ,private router:Router) { }

  ngOnInit(): void {
    console.log(this.admin,'adminloginchk')
  }
  loginSave(){
    this.router.navigate(['/testing'])
    console.log('work')
   
    this.api.adminLogin(this.admin).subscribe((data: any) => {
      this.api.isLoggedIn = true;
      console.log(data,'##############')
      // yar admin logino underscore kudukanum idya
if(data._id=="6459a692fa221302930aed9a"){
this.api.isAdminLOgin = true;
}else{
  this.api.isAdminLOgin = false;
}
    })
    
  }
  
  register(){
    // console.log(this.admin,'adminloginchk')
    this.router.navigate(['/register'])
    // console.log('regcomponent')
  }
}
