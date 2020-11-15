import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.page.html',
  styleUrls: ['./invite-friends.page.scss'],
})
export class InviteFriendsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAccount(){
    this.router.navigate(['home','account'])
  }
}
