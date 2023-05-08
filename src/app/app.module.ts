import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormComponent } from './form/form.component';
import { TestingComponent } from './testing/testing.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardComponent } from './card/card.component';
import { PaststudComponent } from './paststud/paststud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CurrentstudComponent } from './currentstud/currentstud.component';
import { MatTableModule } from '@angular/material/table';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { SettingComponent } from './setting/setting.component';
import { LogoutComponent } from './logout/logout.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PaststudlistComponent } from './paststudlist/paststudlist.component';
// import { MatFormField, MatLabel } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material';
// import { MatIconModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PststudpostComponent } from './pststudpost/pststudpost.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { PostliistComponent } from './postliist/postliist.component';
// import{MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    // FormComponent,
    TestingComponent,
    SidenavComponent,
    CardComponent,
    PaststudComponent,
    CurrentstudComponent,
    StudentlistComponent,
    SettingComponent,
    LogoutComponent,
    PaststudlistComponent,
    PststudpostComponent,
    RegisterComponent,
    PostliistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    // MatIconModule
    // MatFormField,
    // MatLabel
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatRadioModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
