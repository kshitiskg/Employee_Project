import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  apiStartPoint="https://onlinetestapi.gerasim.in/api/TeamSync/"
  constructor(private http:HttpClient) { }

  getAllLeaves(){
    return this.http.get(this.apiStartPoint + APIConstant.leaveEndPoint.GetAllLeaves);
  }

  getAllLeaveEmpById(id:number){
    return this.http.get(this.apiStartPoint + APIConstant.leaveEndPoint.GetAllLeavesByEmpId+id );

  }

  addLeaves(obj: any) {
    return this.http.post(this.apiStartPoint + APIConstant.leaveEndPoint.AddLeave, obj);
  }

  updateLeaves(obj: any) {
    return this.http.post(this.apiStartPoint + APIConstant.leaveEndPoint.UpdateLeave, obj);
  }

  deleteLeave(empId: number) {
    return this.http.get(this.apiStartPoint + APIConstant.leaveEndPoint.DeleteLeaveById+empId);
  }
}
