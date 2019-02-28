import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';
@Component(
    { selector: 'login-list', 
    templateUrl: 'login-list.component.html',
    styleUrls: ['login-list.component.css']
    })

export class LoginListComponent {
        currentUser: User;
    
        constructor(
            private router: Router,
            private authenticationService: AuthenticationService
        ) {
            this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        }
    
        logout() {
            this.authenticationService.logout();
            this.router.navigate(['/login-list/login']);
        }
}