import { Component, OnInit } from '@angular/core';
import { AdvanceSalaryService } from 'src/app/core/services/advanceSalary/advance-salary.service';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';

@Component({
  selector: 'app-salary-advance',
  templateUrl: './salary-advance.component.html',
  styleUrls: ['./salary-advance.component.css']
})
export class SalaryAdvanceComponent implements OnInit {
  addAdvance:boolean=false;
  editAdvance:boolean=false;
  advanceArray:any=[];
  employeeArrays:any=[];
  advanceObj:any={
      advanceId: 0,
      employeeId: 0,
      advanceDate: "",
      advanceAmount: 0,
      reason: ""
  }
  constructor(private employeSrv:EmployeeService,private advanceSrv:AdvanceSalaryService){}

  ngOnInit(): void {
    this.getAllAdvance();
    this.getAllEmployee();
  }

  resetAdvance(){
    this.advanceObj ={
      advanceId: 0,
      employeeId: 0,
      advanceDate: "",
      advanceAmount: 0,
      reason: ""
  }
  }
  getAllEmployee(){
   
    this.employeSrv.getAllEmployee().subscribe((res:any)=>{
        this.employeeArrays=res.data;
    })
  }
  getAllAdvance() {
    this.advanceSrv.getAllAdvance().subscribe((res: any) => {
      this.advanceArray = res.data;
    });
  }
  createAdvance(){
    this.advanceSrv.addAdvance(this.advanceObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
        this.getAllAdvance();
        this.resetAdvance();
      } else {
        alert(res.message);
      }
    });
  }
  editRecord(list:any){
    this.editAdvance = true;
    this.advanceObj=list;
  }
  updateAdvance(){
    this.advanceSrv.updateAdvance(this.advanceObj).subscribe((res:any)=>{
      if (res.result) {
        alert(res.message);
        this.getAllAdvance();
        this.editAdvance=false;
      } else {
        alert(res.message);
      }
    });
  }
  onDelete(id:number){
    this.advanceSrv.deleteAdvance(id).subscribe((res:any)=>{
      if (res.result) {
        alert(res.message);
        this.getAllAdvance();
      } else {
        alert(res.message);
      }
    })
  }
}
