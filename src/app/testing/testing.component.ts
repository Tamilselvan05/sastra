import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  data = [
    {name:"tamil", type:"one"},
    {name:"johnwick", type:"two"},
    {name:"kavin", type:"three"},
  ];


  // delete 
  delete(index: number) {
    this.data.splice(index, 1);
  }

  loginOut(){

    this.router.navigate(['/logout'])
    console.log("chkkkkkkkk");
    
  }
 
}
