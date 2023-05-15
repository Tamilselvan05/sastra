import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-postliist',
  templateUrl: './postliist.component.html',
  styleUrls: ['./postliist.component.css']
})
export class PostliistComponent implements OnInit {

  users:any
  user:any
  // isPassedName = localStorage.getItem('isPassedName');
  constructor(public api:ApiService) { 
// console.log(api.)
  }
  data = [
    {name:"Shree Kalai Vathana", type:"one"},
    {name:"Harini", type:"two"},
    {name:"Rashika", type:"three"},
    {name:"prethika", type:"three"},
    {name:"Megala", type:"three"},
    {name:"Nandhini", type:"three"},
    
  ];
  postObj={}
  ngOnInit(): void {
      // console.log(this.api.paststudpost,'tttttttttt')  
  this.api.paststudget().subscribe((data:any)=>{
    this.users = data
    // console.log(this.users.data[0].title,'datachking')
  })
    }

  // delete 
  delete(index: number) {
    this.api.registerDelete().subscribe((data:any)=>{
      console.log("checked---")

      console.log("check",data)
      this.data.splice(index, 1);
      // this.user = data
      // console.log(this.users.data[0].title,'datachking')
    })
  }




}
