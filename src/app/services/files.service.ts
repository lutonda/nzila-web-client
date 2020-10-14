

import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Injectable } from '@angular/core';

let identity='system/files/upload';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: AppService) { }

  getAll(): Observable<any> {
    return this.http.getAll(identity);
  }
  getOne(id:String): Observable<any> {
    return this.http.getOne(id,identity);
  }

  upload(data): Observable<any>{
    console.log(data)
    return this.http.row().post<any>(identity+'/upload', data)
  }

  create(data): Observable<any>{
    return this.http.create(data,identity)
  }

  serverAddress=():string => this.http.serverAddress;
}
