import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  users:any
  user:any
naming:any
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
    console.log(this.naming,'aaaaaaaaaaa')
    this.api.paststudget().subscribe((data:any)=>{
      this.users = data
      // this.users = this.user
       console.log(this.users,'carddata')
    })

    this.api.paststudgetRegister().subscribe((data:any)=>{
      this.user = data
      this.user.data.forEach((value: any) => {
        console.log(value.name,'kkk')
        this.naming= value.name
      });
      
    })

  }

  // delete 
  delete(index: number) {
    this.data.splice(index, 1);
  }
}
