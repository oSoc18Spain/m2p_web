import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, Datatable } from '../../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  SERVER: string =  environment.server
  PORT: number = environment.port

  constructor(private http: HttpClient) { }

  getDashboardJSON = () => {
    let route: string = '/api/dashboard';
    return this.http.get(`${this.SERVER}:${this.PORT}${route}`);
  }
}
