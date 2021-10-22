import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/interfaces/operation';
import { Rol } from 'src/app/interfaces/rol';
import { Roloperation } from 'src/app/interfaces/roloperation';

@Component({
  selector: 'app-read-rol-operation',
  templateUrl: './read-rol-operation.component.html',
  styleUrls: ['./read-rol-operation.component.scss']
})
export class ReadRolOperationComponent implements OnInit {

  readRolOperations: Roloperation [] = [
    {
      Id_up: 1,
      Id_rol: 1,
      Id_operation: 1
    }
  ];

  readOperation: Operation [] = [
    {
      Id_operation: 1,
      Name_operation: 'OperacionOne',
      Id_module: 1
    }
  ];

  readRol: Rol [] = [
    {
      Id_rol: 1,
      Name: 'RolOne',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
