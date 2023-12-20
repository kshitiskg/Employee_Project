import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AttendenceComponent } from './pages/attendence/attendence.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { SalaryAdvanceComponent } from './pages/salary-advance/salary-advance.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyTableComponent } from './shared/widgets/my-table/my-table.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DashboardComponent,
    AttendenceComponent,
    LeaveComponent,
    SalaryComponent,
    SalaryAdvanceComponent,
    NavbarComponent,
    LoginComponent,
    MyTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
