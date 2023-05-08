import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  router: any;
  admin = {
    userName: "",
    password: "",
  };
  constructor(public api:ApiService) { }

  ngOnInit(): void {
    console.log(this.admin,'adminloginchk')
  }
  loginSave(){
    // this.router.navigate(['/card'])
    console.log('work')
   
    this.api.adminLogin(this.admin).subscribe((data: any) => {
      console.log(data)
    })
    
  }
  
  register(){
    console.log(this.admin,'adminloginchk')
    // this.router.navigate(['/register'])
    console.log('regcomponent')
  }
}
