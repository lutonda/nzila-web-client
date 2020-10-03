import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
res={};
  constructor(private broadcastService: BroadcastService, private authService: MsalService, private router: Router) { }

    ngOnInit() {    }

    login = async () => {
        let response = await this.authService.loginPopup();
        this.res=response;
        if (response.idToken) {
          this.router.navigate(['/my-profile']);
        }
      }
     


}
