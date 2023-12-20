import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  api = 'http://onlinetestapi.gerasim.in/api/TeamSync/';
  constructor(private http: HttpClient) {}
  getAllAttendance() {
    return this.http.get(
      this.api+APIConstant.attendanceEndPoint.GetAllAttendance
    );
  }

  addAttendance(obj: any) {
    return this.http.post(
      this.api+APIConstant.attendanceEndPoint.AddAttendance,
      obj
    );
  }

  updateAttendance(obj: any) {
    return this.http.post(
      this.api+APIConstant.attendanceEndPoint.UpdateAttendance,
      obj
    );
  }

  deleteAttendance(attendaceId: number) {
    return this.http.get(
      this.api+APIConstant.attendanceEndPoint.DeleteAttendanceById +
        attendaceId
    );
  }
}
