import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pststudpost',
  templateUrl: './pststudpost.component.html',
  styleUrls: ['./pststudpost.component.css']
})
export class PststudpostComponent implements OnInit {
  pststudpost = {
    title: "",
    description: "",
  };
  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }
pastStudPost(){
  console.log(this.pststudpost,'postchk');
  this.api.paststudpost(this.pststudpost).subscribe((data: any) => {
    console.log(data)
  })
  this.pststudpost.title =""
this.pststudpost.description =""


}
}
