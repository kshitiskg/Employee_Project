import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class AdvanceSalaryService {

  apiStartPoint="http://onlinetestapi.gerasim.in/api/TeamSync/"
  constructor(private http: HttpClient) { }
  

  getAllAdvance(){
    return this.http.get(this.apiStartPoint+APIConstant.advanceSalaryEndPoint.GetAllAdvance)
  }
  getAllAdvanceByEmployee(id:number){
    return this.http.get(this.apiStartPoint+APIConstant.advanceSalaryEndPoint.GetAllAdvanceByEmpId+id);
  }
  addAdvance(obj: any) {
    return this.http.post(this.apiStartPoint+APIConstant.advanceSalaryEndPoint.AddAdvance, obj);
  }

  updateAdvance(obj:any){
    return this.http.post(this.apiStartPoint+APIConstant.advanceSalaryEndPoint.UpdateAdvance,obj);
  }
  deleteAdvance(Id: number) {
    return this.http.get(this.apiStartPoint+APIConstant.advanceSalaryEndPoint.DeleteAdvanceById + Id);
  }
}
