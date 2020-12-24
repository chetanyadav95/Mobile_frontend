import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  datatype: string
  risk: number
  leverage: string
  _id: string
  constructor(private router: Router, private userService: UserService, private watchlistService: WatchlistService) { }

  ngOnInit() {
    this.userService.getSettings().subscribe((r:any) => {
      this.datatype = r.data.datatype
      this.risk = r.data.risk
      this.leverage = r.data.leverage.toString()
      this._id = r.data._id
    })
  }

  navigateToAccount(){
    this.router.navigate(['home','account'])
  }
  
  dataChange(){
    this.userService.updateSettings(this._id, this.datatype, this.risk, this.leverage).subscribe()
  }
}
