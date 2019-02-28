import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { menus } from './menu-element';
import { User } from '../../login-list/_models/user';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService, UserService } from '../../login-list/_services';

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit,OnDestroy {

    @Input() iconOnly:boolean = false;
    public menus = menus;
    currentUserSubscription:Subscription;
    users: User[] = [];
    currentUser: User;
    constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
    ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });
     }

    ngOnInit() {
    }
    ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.currentUserSubscription.unsubscribe();
  }

}
