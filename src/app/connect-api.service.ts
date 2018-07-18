import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectApiServices {
  SERVER: string = environment.server;
  PORT: number = environment.port;

  constructor(private http: HttpClient) {}

  getJSON = (route: string) => {
    console.log(`${this.SERVER}:${this.PORT}${route}`);

    return this.http.get(`${this.SERVER}:${this.PORT}${route}`);
  };

  getServer = (): string => {
    return this.SERVER;
  };

  getPort = (): number => {
    return this.PORT;
  };
}
