import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/core/module/table';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  serachText:string='';

  employeeObj:any={
    
      empId: 0,
      empName: "",
      empContactNo: "",
      empAltContactNo: "",
      empEmail: "",
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      city: "",
      state: "",
      bankName: "",
      iFSC: "",
      accountNo: "",
      bankBranch: "",
      salary: 0
    
    
  }
  columnList: Column[]= [
    {field: 'empName', heading:'Name'},
    {field: 'empContactNo', heading:'Contact'},
    {field: 'empEmail', heading:'Email'},
    {field: 'empAltContactNo', heading:'Alt Contact'},
    {field: 'city', heading:'City'} 
  ];

  isLoader:boolean=true;
  employeeArray:any[]=[];
  addEmployee:boolean=false;
  editEmployee:boolean=false;

  constructor(private employeSrv:EmployeeService,private searchSrv:SearchService){
    
  }

  ngOnInit(): void {
    this.getAllEmployee();
    
  }

  onSerachTextEntered(searchValue:string){
  
    this.serachText = searchValue;  
  }
  onDeleteEmp(id:any) {

  }
  onEditEmp(id:any) {

  }
  resetEmployee(){
    this.employeeObj={
    
      empId: 0,
      empName: "",
      empContactNo: "",
      empAltContactNo: "",
      empEmail: "",
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      city: "",
      state: "",
      bankName: "",
      iFSC: "",
      accountNo: "",
      bankBranch: "",
      salary: 0
    
    
  }
  }
  getAllEmployee(){
   
    this.employeSrv.getAllEmployee().subscribe((res:any)=>{
        this.employeeArray=res.data;
    })
  }
  createEmployee(){
    this.employeSrv.createEmployee(this.employeeObj).subscribe((res:any)=>{
      if(res.result){
        alert(res.message);
        this.resetEmployee();
        this.getAllEmployee();

      }else{
        alert(res.message);
      }
    })
  }
  editRecord(id:number){
    this.editEmployee=true;
    this.employeSrv.getEmployeeEmpId(id).subscribe((res:any)=>{
     if(res.result){
      this.employeeObj=res.data
     }else{
      alert(res.message)
     }
    })
  
  }
  updateEmployee(){
    this.employeSrv.updateEmployee(this.employeeObj).subscribe((res:any)=>{
      if(res.result){
        alert(res.message);
        this.getAllEmployee();
        this.resetEmployee();
        this.editEmployee=false;

      }else{
        alert(res.message);
      }
    })
  }
  onDelete(id:number){
   this.employeSrv.deleteEmployee(id).subscribe((res:any)=>{
    if(res.result){
      alert(res.message);
      this.getAllEmployee();

    }else{
      alert(res.message);
    }
   })
  }
}
