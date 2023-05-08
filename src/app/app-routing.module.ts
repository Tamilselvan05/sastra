import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CurrentstudComponent } from './currentstud/currentstud.component';
import { LogoutComponent } from './logout/logout.component';
import { PaststudComponent } from './paststud/paststud.component';
import { PostliistComponent } from './postliist/postliist.component';
import { PststudpostComponent } from './pststudpost/pststudpost.component';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
{ path:'card',component:CardComponent },
{ path:'paststud',component:PaststudComponent },
{ path:'currentstud',component:CurrentstudComponent},
{ path:'setting',component:SettingComponent},
{ path:'logout',component:LogoutComponent},
{ path:'studentlist',component:StudentlistComponent},
{ path:'pststudpost',component:PststudpostComponent},
{ path:'postliist',component:PostliistComponent},
{ path:'register',component:RegisterComponent},


// { path:'',component:RegisterComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
