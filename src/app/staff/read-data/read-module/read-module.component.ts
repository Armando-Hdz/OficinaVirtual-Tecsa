import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/interfaces/module';

@Component({
  selector: 'app-read-module',
  templateUrl: './read-module.component.html',
  styleUrls: ['./read-module.component.scss']
})
export class ReadModuleComponent implements OnInit {

  readModule: Module[] = [
    {
      Id_module: 1,
      Name_module: 'ModuleOne'
    },
    {
      Id_module: 2,
      Name_module: 'ModuleTwo'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
