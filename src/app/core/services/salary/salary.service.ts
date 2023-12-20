import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private http:HttpClient) { }
  getAllSalary(){
   return this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllSalary");
  }

  addSalary(obj:any){
    return this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddSalary",obj);
  }

  updateSalary(obj:any){
    return this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/UpdateSalary",obj);
  }

  deleteSalaryById(id:number){
    return this.http.delete("http://onlinetestapi.gerasim.in/api/TeamSync/DeleteSalaryById?salaryid=" + id);
  }
}
