import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-currentstudentregister',
  templateUrl: './currentstudentregister.component.html',
  styleUrls: ['./currentstudentregister.component.css']
})
export class CurrentstudentregisterComponent implements OnInit {
  title = 'currentstud';
  hide = false;
  

 currentStudentObj = {
    name: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
    currentStudent:""
  }

  constructor(public api: ApiService) { }
  ngOnInit(): void {
    // this.api.adminPost(this.datas).subscribe((data: any) => {  
  }

registerForm(){
  console.log(this.currentStudentObj,'------------')
 if(this.currentStudentObj && this.currentStudentObj.currentStudent){
    this.api.currentStudentRegister(this.currentStudentObj).subscribe((data: any) => {
      console.log(data,'curstud')
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
}

