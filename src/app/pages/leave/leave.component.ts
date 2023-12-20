import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { LeaveService } from 'src/app/core/services/leave/leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
})
export class LeaveComponent implements OnInit {
  addLeave: boolean = false;
  editLeave: boolean = false;

  leaveArray: any = [];

  leaveObj: any = {
    leaveId: 0,
    employeeId: 0,
    leaveDate: '',
    leaveReason: '',
    noOfFullDayLeaves: 0,
    noOfHalfDayLeaves: 0,
  };

  employeeArray:any=[]

  constructor(private leaveSrv: LeaveService,private employeSrv:EmployeeService) {}

  ngOnInit(): void {
    this.getAllLeave();
    this.getAllEmployee();
  }
  resetLeave() {
    this.leaveObj = {
      leaveId: 0,
      employeeId: 0,
      leaveDate: '',
      leaveReason: '',
      noOfFullDayLeaves: 0,
      noOfHalfDayLeaves: 0,
    };
  }
  getAllEmployee(){
   
    this.employeSrv.getAllEmployee().subscribe((res:any)=>{
     
        this.employeeArray=res.data;
        
      
    })
  }
  getAllLeave() {
    this.leaveSrv.getAllLeaves().subscribe((res: any) => {
      this.leaveArray = res.data;
    });
  }
  createLeave() {
    this.leaveSrv.addLeaves(this.leaveObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
        this.getAllLeave();
        this.resetLeave();
      } else {
        alert(res.message);
      }
    });
  }
  editRecord(leave:any) {

    this.editLeave = true;
    this.leaveObj=leave;
   
   
  }
  updateLeave() {
    this.leaveSrv.updateLeaves(this.leaveObj).subscribe((res:any)=>{
      if (res.result) {
        alert(res.message);
        this.getAllLeave();
        this.editLeave=false;
      } else {
        alert(res.message);
      }
    });
   
  }
  onDelete(id: number) {
    this.leaveSrv.deleteLeave(id).subscribe((res:any)=>{
      if (res.result) {
        alert(res.message);
        this.getAllLeave();
      } else {
        alert(res.message);
      }
    })
  }
}
