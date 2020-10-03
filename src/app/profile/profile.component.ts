import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    public profile = {};
    graphMeEndpoint = "https://graph.microsoft.com/v1.0/me";

    constructor(private authService: MsalService, private router: Router,private http: HttpClient) { }

    ngOnInit() {
        this.getProfile()
    }

    logout() {
        this.authService.logout();
    }
    getProfile() {
        alert(0)
        const requestObj = {
            scopes: ["user.read"]
        };
        this.http.get(this.graphMeEndpoint).toPromise()
            .then(profile => {
                alert(1)
                this.profile = profile;
            }).catch(function (error) {
                alert(JSON.stringify(error))
                console.log(error);
            });
    }
}
