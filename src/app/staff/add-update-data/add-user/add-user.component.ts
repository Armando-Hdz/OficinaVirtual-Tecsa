import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Module } from 'src/app/interfaces/module';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  //addUser: FormGroup;

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
