import { Component, OnInit } from '@angular/core';
import { ReadService } from '../service/read.service';
import { Response } from 'src/app/interfaces/response/response';

@Component({
  selector: 'app-read-operation',
  templateUrl: './read-operation.component.html',
  styleUrls: ['./read-operation.component.scss']
})
export class ReadOperationComponent implements OnInit {

  public lstOperation: any[] = [];

  constructor(
    private readService: ReadService
  ) { }

  ngOnInit(): void {
    this.getOperation();
  }

  getOperation() {
    this.readService.getOperation().subscribe(
      Response => {
        this.lstOperation = Response.data;
      }
    );
  }
}
