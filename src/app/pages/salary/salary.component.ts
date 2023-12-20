import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, race } from 'rxjs';
import { AdvanceSalaryService } from 'src/app/core/services/advanceSalary/advance-salary.service';
import { AttendanceService } from 'src/app/core/services/attendance/attendance.service';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { SalaryService } from 'src/app/core/services/salary/salary.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  salaryArray: any[] = [];
  employeeArray: any[] = [];
  editbybtn: boolean = false;
  addSalary: boolean = false;
  editSalary: boolean = false;

  totalAdvAmount: number = 0;
  totalLeaves: number = 0;
  
  attendanceArray:any=[];
  
  data:any=[];

  salaryObj :any= {
    salaryId: 0,
    employeeId: 0,
    salaryDate: "",
    totalAdvance: 0,
    presentDays: 0,
    salaryAmount: 0
  };
  isLoader: boolean = false;
  edits: boolean = false;
  allAttendance: any[]=[]
  constructor(private http:HttpClient,private attendance:AttendanceService,  private salarySrv:SalaryService,private employeSrv:EmployeeService,private advanceSrv:AdvanceSalaryService){

  }

  ngOnInit(): void {
    this.getAllSalary();
    this.getAllEmployee();
    this.getAllAtte();
    
   
  }
  resetSalary(){
    this.salaryObj = {
      salaryId: 0,
      employeeId: 0,
      salaryDate: "",
      totalAdvance: 0,
      presentDays: 0,
      salaryAmount: 0
    };
  }
  getAllAtte () {
    this.attendance.getAllAttendance().subscribe((res: any) => {
      this.allAttendance  = res.data;
     
    })
  }



 
  getEmpData(){
    debugger;
    const selectedEmp  = this.employeeArray.find(m=>m.empId == this.salaryObj.employeeId);
    
    let attendance =this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendanceByEmployeeId?empId="+this.salaryObj.employeeId)
    let advance =this.http.get("https://offline.gerasim.in/api/TeamSync/GetAllAdvanceByEmpId?empId="+this.salaryObj.employeeId)
    forkJoin([attendance,advance]).subscribe((res:any) => {
      let totalPresentDays =  res[0].data.length;
      this.salaryObj.presentDays=totalPresentDays;
      let totalaAdv = 0;

      res[1].data.forEach((element: any) => {
        totalaAdv = totalaAdv + element.advanceAmount;
        this.salaryObj.totalAdvance=totalaAdv;
      });
      this.salaryObj.salary =((selectedEmp.salary / 30) * totalPresentDays)- totalaAdv;

    }); 
     
  }

  getAllLeaves() {
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeaves").subscribe((res: any) => {
      this.totalLeaves = res.data.filter((m: any) => m.employeeId == this.salaryObj.employeeId).length;
      this.salaryObj.presentDays = 30 - this.totalLeaves ;
      console.log(this.salaryObj.presentDays)
    })
  }
  
  getAllEmployee(){
    this.employeSrv.getAllEmployee().subscribe((res:any)=>{
        this.employeeArray=res.data;
    })
  }
  getAllSalary(){
    this.salarySrv.getAllSalary().subscribe((res:any)=>{
      this.salaryArray=res.data
    })
  }
  createSalary(){
    this.salarySrv.addSalary(this.salaryObj).subscribe((res:any)=>{
      if(res.result){
        alert(res.message);
        this.getAllSalary();
        this.resetSalary();
      }else{
        alert(res.message);
      }
    })
  }
  calculateSalary(){
    const empData = this.employeeArray.find(m => m.empId == this.salaryObj.employeeId);
    const perDaySalary = empData.salary / 30;
    this.salaryObj.salaryAmount = (this.salaryObj.presentDays * perDaySalary) - this.salaryObj.totalAdvance;
  }

  editRecord(salaryRecord:any){
  this.editSalary=true;
  this.salaryObj=salaryRecord;

  }
  updateSalary(){
    this.salarySrv.updateSalary(this.salaryObj).subscribe((res:any)=>{
      if(res.result){
        alert(res.message);
        this.getAllSalary();
        this.resetSalary();
      }else{
        alert(res.message);
      }
    })
  }
  onDelete(id:number){
    this.salarySrv.deleteSalaryById(id).subscribe((res:any)=>{
      if(res.result){
        alert(res.message);
        this.getAllSalary();
        this.resetSalary();
      }else{
        alert(res.message);
      }
    })
  }
}
