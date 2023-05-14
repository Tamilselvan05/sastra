import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'currentstud';
  hide = false;
 delete:any

  pststudregister = {
    passedOutStudent: "",
    name: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
    yearOfPassing:"",
    batch:"",
    designation:"",
    companyName:"",
  }

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    // this.api.adminPost(this.datas).subscribe((data: any) => {
    console.log(this.pststudregister,'registerchecking')
    
  }
registerForm(){
  console.log(this.pststudregister,'------------')
  if(this.pststudregister && this.pststudregister.passedOutStudent){   
    this.api.pastStudRegister(this.pststudregister).subscribe((data: any) => {
      console.log(data)
    })
  }
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your register has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}
  // delete 
  // delete(index: number) {
  //   this.data.splice(index, 1);
  // }
}

