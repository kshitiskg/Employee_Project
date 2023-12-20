import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { SalaryAdvanceComponent } from './pages/salary-advance/salary-advance.component';
import { AttendenceComponent } from './pages/attendence/attendence.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
 
  {
    path:'',
    component:NavbarComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'employee',
        component:EmployeeComponent
      },

      {
        path:'leave',
        component:LeaveComponent
      },
      {
        path:'salary',
        component:SalaryComponent
      },
      {
        path:'salaryAdvance',
        component:SalaryAdvanceComponent
      },
      {
        path:'attendance',
        component:AttendenceComponent
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
