import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/interfaces/module';
import { Operation } from 'src/app/interfaces/operation';

@Component({
  selector: 'app-read-operation',
  templateUrl: './read-operation.component.html',
  styleUrls: ['./read-operation.component.scss']
})
export class ReadOperationComponent implements OnInit {

  readOperation: Operation [] = [
    {
      Id_operation: 1,
      Name_operation: 'OperacionOne',
      Id_module: 1
    }
  ];

  readModule: Module[] = [
    {
      Id_module: 1,
      Name_module: 'ModuleOne'
    },
    {
      Id_module: 2,
      Name_module: 'ModuleTwo'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
