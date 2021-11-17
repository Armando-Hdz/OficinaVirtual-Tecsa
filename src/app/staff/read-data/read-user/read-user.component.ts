import { Component, OnInit } from '@angular/core';
import { ReadService } from '../service/read.service';
import { Response } from 'src/app/interfaces/response/response';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.scss']
})
export class ReadUserComponent implements OnInit {

  ver: boolean = false;

  public lstUser: any[] = [];

  showTask() {
    this.ver = true;
  }

  hideTask(){
    this.ver =false
  }

  constructor(
    private srvRead: ReadService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.srvRead.getUser().subscribe(
      Response => {
        this.lstUser = Response.data;
      }
    );
  }

}
