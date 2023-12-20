import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiStartPoint="https://onlinetestapi.gerasim.in/api/TeamSync/"
  constructor(private http: HttpClient) { }
  
  getAdminDashBoard(){
    return this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/getAdminDashboard");
 }

  getAllEmployee(){
   return this.http.get(this.apiStartPoint+APIConstant.employeeEndPoint.GetAllEmployee);
  }

  getEmployeeEmpId(id:number){
    return this.http.get(this.apiStartPoint+APIConstant.employeeEndPoint.GetEmployeeByEmpId+id);
  }

  createEmployee(obj:any){
    return this.http.post(this.apiStartPoint+APIConstant.employeeEndPoint.CreateEmployee,obj);
  }

  updateEmployee(obj:any){
    return this.http.post(this.apiStartPoint+APIConstant.employeeEndPoint.UpdateEmployee,obj);
  }


    deleteEmployee(empId: number) {
        return this.http.get(this.apiStartPoint+APIConstant.employeeEndPoint.DeleteEmployeeByEmpId + empId);

  }}
