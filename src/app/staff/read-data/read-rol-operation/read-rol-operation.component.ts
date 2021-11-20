import { Component, OnInit } from '@angular/core';
import { ReadService } from '../service/read.service';
import { Response } from 'src/app/interfaces/response/response';

@Component({
  selector: 'app-read-rol-operation',
  templateUrl: './read-rol-operation.component.html',
  styleUrls: ['./read-rol-operation.component.scss']
})
export class ReadRolOperationComponent implements OnInit {

  public lstRolOperation: any[] = [];

  constructor(
    private readService: ReadService
  ) { }

  ngOnInit(): void {
    this.getRolOperation();
  }

  getRolOperation(){
    this.readService.getRolOperation().subscribe(
      Response => {
        this.lstRolOperation = Response.data;
      }
    );
  }
}
