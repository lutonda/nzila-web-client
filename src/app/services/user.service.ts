import { Injectable } from '@angular/core';

import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  cachedUser: any;
    
  constructor(private authService: MsalService, private http: HttpClient) {
  }
  public tryToGetUser() {
    let user=this.authService.getAccount();
    alert(user.userName);
    alert(user.name);
    alert(user.accountIdentifier);
    alert('https://graph.microsoft.com/v1.0/me/photo/'+user.homeAccountIdentifier);
    alert(JSON.stringify(user));
    alert(0)
      if (this.authService.getAccount()) {
        alert(JSON.stringify(this.getUser()));
          return this.getLocalUser();
      }
      alert(1)
      return null;
  }

  public getUser() {
    return this.authService.getAccount();
  }

  public getLocalUser() {
      return this.http.get<any>(`User/loggedinuser`).pipe(tap(user => {
          this.cachedUser = user;
          alert(JSON.stringify(user));
      }));
  }
}
