import { Component, OnInit } from '@angular/core';
import { ReadService } from '../service/read.service';
import { Response } from 'src/app/interfaces/response/response';

@Component({
  selector: 'app-read-module',
  templateUrl: './read-module.component.html',
  styleUrls: ['./read-module.component.scss']
})
export class ReadModuleComponent implements OnInit {

  public lstModule: any[] = [];

  constructor(private srvRead: ReadService) { }

  ngOnInit(): void {
    this.getModule();
  }

  getModule(){
    this.srvRead.getModules().subscribe(
      Response => {
        this.lstModule = Response.data;
      }
    );
  }

}
