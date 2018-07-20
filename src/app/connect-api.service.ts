import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectApiServices {
  SERVER: string = environment.server;
  PORT: number = environment.port;
  constructor(private http: HttpClient,
    public router: Router) {

  }

  getJSON = (route: string, fake?:boolean) => {
    if(fake)
      return this.http.get(`http://localhost:8080${route}`);
    else
      return this.http.get(`${this.SERVER}:${this.PORT}${route}`);
  };
  
  setInfo = (route:string, obj: any)=>{
    return this.http.post(`${this.SERVER}:${this.PORT}${route}`,obj)
  }

  throwError = status => {
    console.error(`Error ${status}`)
    throw new Error(
      `Couldn't connect to the API Server at ${this.getServer()}:${this.getPort()} or API couldn't get the data.`
    );
  }

  getServer = (): string => {
    return this.SERVER;
  };

  getPort = (): number => {
    return this.PORT;
  };
}
