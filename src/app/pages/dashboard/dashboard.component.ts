import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboradObj:any= {
    totalEmployee: 0,
    totalAdvanceRecordCount: 0,
    totalLeavesCount: 0,
    totalSalaryCount: 0,
    todaysAdvanceTotalAmount: 0,
    todaysLeaves: 0
  }
  serachText:string='';
  dashboradArray:any=[];
  constructor(private empSrv:EmployeeService){}

  ngOnInit(): void {
    this.getAllDashboard();
  }

  onSerachTextEntered(searchValue:string){
  
    this.serachText = searchValue;  
  }
  getAllDashboard(){
    this.empSrv.getAdminDashBoard().subscribe((res:any)=>{
      this.dashboradArray=res.data;
    })
  }
}
