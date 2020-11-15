import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.page.html',
  styleUrls: ['./funds.page.scss'],
})
export class FundsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAccount(){
    this.router.navigate(['home','account'])
  }
}
