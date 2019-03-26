import { Component, OnInit, Input } from '@angular/core';
import { UserstoreService } from '../../services/userstore.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userGroup: string;
  username: string;
  @Input() home: boolean;

  @Input() dashboardExpert: string;
  @Input() uploadmedias: string;
  @Input() mymedia: string;
  @Input() configurations: boolean;
  @Input() usersroles: boolean;

  constructor(private userstoreService: UserstoreService) { }

  ngOnInit() {
    this.userGroup = this.userstoreService.getUserGroup();
    this.username = this.userstoreService.getUserName();
  }

}
