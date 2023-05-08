import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  settingObj = {
    currentUserName: "",
    newUserName: "",
    confirmUserName: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  //   constructor() { }
  //   hide = true;
  //   public showPassword: boolean | undefined;
  //   public showPasswordOnPress: boolean | undefined;
  //   ngOnInit(): void {
  //   }
  // clear = {}
  // }
  public showPassword: boolean = false;

  constructor(public api: ApiService) { }


  ngOnInit(): void {

  }

  settingForm() {
    console.log(this.settingObj, 'nnnnnnnnnnn')

    this.api.setting(this.settingObj).subscribe((data: any) => {
      console.log(data)
    })
    // this.settingObj=""
    // clear.push(ths.settingObj)
    this.settingObj.currentUserName = ""
    this.settingObj.newUserName = ""
    this.settingObj.confirmUserName = ""

    this.settingObj.currentPassword = ""

    this.settingObj.newPassword = ""

    this.settingObj.confirmPassword = ""



  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
