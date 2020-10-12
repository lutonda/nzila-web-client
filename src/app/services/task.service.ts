import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Injectable } from '@angular/core';

let identity='tasks';
@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private http: AppService) { }

  getAll(): Observable<any> {
    return this.http.getAll(identity);
  }
  getOne(id:String): Observable<any> {
    return this.http.getOne(id,identity);
  }

  update(data): Observable<any>{
    return this.http.update(data._id, data,identity)
  }

  create(data): Observable<any>{
    return this.http.create(data,identity)
  }

  serverAddress=():string => this.http.serverAddress;
}