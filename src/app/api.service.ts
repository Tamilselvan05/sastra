import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:3000"

  
//  public loginUrl = this.baseUrl + "/user/login"
public settingUrl = this.baseUrl + "/user/admin"

public pastStudUrl = this.baseUrl + "/user/pststudposting"

public pastStudget = this.baseUrl + "/user/getAllUser"

public pastStudRegisterUrl = this.baseUrl + "/user/pastStudRegister"

public pastStudRegisterDelete = this.baseUrl + "/user/delete"

public adminLoginUrl= this.baseUrl + "/user/adminLogin"

 isAdminLOgin = false;
//  public registrationUrl = this.baseUrl + "/user/registration"
title = 'datasharing';

isLoggedIn = false
test:any
 constructor(public http: HttpClient) {
console.log(this.test,'yyyy')
  }

setting(userObj : any) {
  console.log(userObj,'yyyyyyyyyyy')
  return this.http.post<any>(this.settingUrl, userObj)
}
 
paststudpost(pstObj:any){
 
  this.test = pstObj
  
  return this.http.post<any>(this.pastStudUrl, pstObj)
}
// get

paststudget(){
  console.log(this.test,'jjjjjj')
  return this.http.get<any>(this.pastStudget)
}

pastStudRegister(pststudregister:any){
  return this.http.post<any>(this.pastStudRegisterUrl, pststudregister)
}
 registerDelete(){
  return this.http.delete<any>(this.pastStudRegisterDelete)
 }


 adminLogin(adminObj:any){
  // return this.http.post<any>(this.adminLoginUrl)
  return this.http.post<any>(this.adminLoginUrl, adminObj)
 }

}