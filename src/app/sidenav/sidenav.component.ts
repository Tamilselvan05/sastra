import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public api: ApiService, public router: Router) { }
  isRegister = true;
  isPassedOutStu = localStorage.getItem('isPassedout');
  isCurrentStu = localStorage.getItem('isCurrent');


  ngOnInit(): void {
    console.log("router", this.router.url);
    // console.log("isPassedOutStu",this.isPassedOutStu);
    console.log("isPassedOutStu", this.isPassedOutStu);
    console.log("isCurrentStu", this.isCurrentStu);


    if (this.router.url === '/register') {

      this.isRegister = false;
      console.log("if this.isRegister", this.isRegister);

    } else {
      this.isRegister = true;
      console.log("else this.isRegister", this.isRegister);
    }

  }

}
