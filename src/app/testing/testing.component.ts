import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  // router: any;

  constructor(public api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  data = [
    { name: "tamil", type: "one" },
    { name: "johnwick", type: "two" },
    { name: "kavin", type: "three" },
  ];


  // delete 
  delete(index: number) {
    this.data.splice(index, 1);
  }

  loginOut() {
    this.api.isLoggedIn = false;
    this.api.isAdminLOgin = false;

    this.router.navigate(['/logout'])
    console.log("chkkkkkkkk");

  }

}
