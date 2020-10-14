import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  serverAddress='127.0.0.1:8800';
  static serverAddress='127.0.0.1:8800';
  constructor(private http: HttpClient) { }

  getAll(service: String): Observable<any> {
    return this.http.get(`http://${this.serverAddress}/api/v1/${service}`);
  }
  getOne(id: String, service: String): Observable<any> {
    return this.http.get(`http://${this.serverAddress}/api/v1/${service}/` + id);
  }
  create(data: any, service: String): Observable<any> {
    return this.http.post(`http://${this.serverAddress}/api/v1/${service}/create`, data);
  }
  update(id: String, data: any, service: String): Observable<any> {
    return this.http.post(`http://${this.serverAddress}/api/v1/${service}/update/` + id, data);
  }
  row(): HttpClient{
    return this.http;
  }
}
