import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public api:ApiService) { }

  data = [
    {name:"Shree Kalai Vathana", type:"one"},
    {name:"Harini", type:"two"},
    {name:"Rashika", type:"three"},
    {name:"prethika", type:"three"},
    {name:"Megala", type:"three"},
    {name:"Nandhini", type:"three"},
    
    
  ];
  // datas = {
  //   currentUserName: "",
  //   newUserName: "",
  //   confirmUserName: "",
  //   currentPassword: "",
  //   newPassword: "",
  //   confirmPassword: "",
  // };
  // allShopList=[];

  postObj={}
  ngOnInit(): void {
    // this.api.adminPost(this.datas).subscribe((data: any) => {
      
    // });
  //  console.log(this.)
  }

  // delete 
  delete(index: number) {
    this.data.splice(index, 1);
  }
}
