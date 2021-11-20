import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Module } from 'src/app/interfaces/module';
import { Operation } from 'src/app/interfaces/operation';
import { ReadService } from '../../read-data/service/read.service';
import { Response } from 'src/app/interfaces/response/response';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.scss']
})
export class AddOperationComponent implements OnInit {

  addOperation: FormGroup;

  public readModule: any[] = [];
/*  readModule: Module [] = [
    {
      Id_module: 1,
      Name_module: 'ModuleOne',
    },
    {
      Id_module: 2,
      Name_module: 'ModuleTwo'
    }
  ];
*/
  constructor(
    private fb: FormBuilder,
    private _srvGetMethods: ReadService
    ) {
    this.addOperation =  this.fb.group(
      {
        Title_Operation:['',Validators.required],
        Id_module: [,Validators.required]
      }
    )
  }

  ngOnInit(): void {
    this.getModule();
  }

  addOperationDB(){
    console.log(this.addOperation)

    const operation: Operation = {
      Name_operation: this.addOperation.get('Title_Operation')?.value,
      Id_module: this.addOperation.get('Id_module')?.value
    }

    console.log(operation)
  }

  getModule(){
    this._srvGetMethods.getModules().subscribe(
      Response => {
        this.readModule = Response.data;
      }
    );
  }

}
