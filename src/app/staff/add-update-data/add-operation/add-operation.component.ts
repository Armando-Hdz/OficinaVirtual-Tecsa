import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/interfaces/operation';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.scss']
})
export class AddOperationComponent implements OnInit {

  readOperation: Operation [] = [
    {
      Id_operation: 1,
      Name_operation: 'OperacionOne',
      Id_module: 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
