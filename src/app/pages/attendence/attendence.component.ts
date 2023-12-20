import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/core/services/attendance/attendance.service';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css'],
})
export class AttendenceComponent implements OnInit {
  addAttendance: boolean = false;
  editAttendance: boolean = false;
  attendanceArray: any = [];
  employeeArray:any=[];
  attendanceObj: any = {
    attendanceId: 0,
    employeeId: 0,
    attendanceDate: '',
    inTime: '',
    outTime: '',
    isFullDay: false,
  };
  filtereAttendArray:any[]=[];


  serachText:string='';

  constructor(private attendSrv:AttendanceService,private employeSrv:EmployeeService, private serachSrv: SearchService) {
    this.serachSrv.onSearchChnage.subscribe((res:any)=>{
      debugger;
      this.filtereAttendArray = this.attendanceArray.filter((param: any) => {
        let search = res;
        let values = Object.values(param);
        let flag = false;
        values.forEach((val: any) => {
          if (val.toString().toLowerCase().indexOf(search) > -1) {
            flag = true;
            return;
          }
        });
        if (flag) {
          return param;
        }
      });
    })
  }

  ngOnInit(): void {
    this.getAllAttendace();
    this.getAllEmployee();
  }
  // onSerachTextEntered(searchValue:string){
  //   debugger;
  //   this.serachText = searchValue;  
  // }
  resetAttendance(){
    this.attendanceObj = {
      attendanceId: 0,
      employeeId: 0,
      attendanceDate: '',
      inTime: '',
      outTime: '',
      isFullDay: false,
    };
  }
  getAllEmployee(){
   
    this.employeSrv.getAllEmployee().subscribe((res:any)=>{
     
        this.employeeArray=res.data;
        
      
    })
  }
  getAllAttendace(){
    this.attendSrv.getAllAttendance().subscribe((res:any)=>{
      this.attendanceArray=res.data;
      this.filtereAttendArray=res.data;
    })
  }
  createAttendance(){
    this.attendSrv.addAttendance(this.attendanceObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
        this.getAllAttendace();
        this.resetAttendance();
      } else {
        alert(res.message);
      }
    });
  }


  editRecord(list: any) {
    this.editAttendance = true;
    this.attendanceObj=list;
  }
  updateAttendance(){
    this.attendSrv.updateAttendance(this.attendanceObj).subscribe((res:any)=>{
      if (res.result) {
        alert(res.message);
        this.getAllAttendace();
        this.editAttendance=false;
        this.resetAttendance();

      } else {
        alert(res.message);
      }
    });
  }
  onDelete(id: number) {
    this.attendSrv.deleteAttendance(id).subscribe((res:any)=>{
      if (res.result) {
        alert(res.message);
        this.getAllAttendace();
      } else {
        alert(res.message);
      }
    })
  }
}
