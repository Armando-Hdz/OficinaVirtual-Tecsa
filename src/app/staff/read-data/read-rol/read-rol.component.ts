import { Component, OnInit } from '@angular/core';
import { ReadService } from '../service/read.service';
import { Response } from 'src/app/interfaces/response/response';

@Component({
  selector: 'app-read-rol',
  templateUrl: './read-rol.component.html',
  styleUrls: ['./read-rol.component.scss']
})
export class ReadRolComponent implements OnInit {

  public lstRol: any[] = [];

  constructor(
    private srvRead: ReadService
  ) { }

  ngOnInit(): void {
    this.getRol();
  }

  getRol(){
    this.srvRead.getRol().subscribe(
      Response => {
        this.lstRol = Response.data;
      }
    );
  }
}
