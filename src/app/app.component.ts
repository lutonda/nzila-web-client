import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isStaff: Boolean = false;
    url='';
    constructor(private router: Router) { }
    ngOnInit(): void {
        this.isStaff = window.location.href.includes('staff');
        console.log(this.router.url);
        if(this.isStaff) {
            require("style-loader!src/assets/backoffice/scss/argon.scss");
          } else {
            require("style-loader!src/assets/scss/argon.scss");
          }
    }

}
