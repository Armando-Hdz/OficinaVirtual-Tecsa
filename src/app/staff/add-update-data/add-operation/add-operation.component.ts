import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Module } from 'src/app/interfaces/module';
import { Operation } from 'src/app/interfaces/operation';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.scss']
})
export class AddOperationComponent implements OnInit {

  addOperation: FormGroup;

  readModule: Module [] = [
    {
      Id_module: 1,
      Name_module: 'ModuleOne',
    },
    {
      Id_module: 2,
      Name_module: 'ModuleTwo'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.addOperation =  this.fb.group(
      {
        Title_Operation:['',Validators.required],
        Id_module: [,Validators.required]
      }
    )
   }

  ngOnInit(): void {
  }

  addOperationDB(){
    console.log(this.addOperation)
    
    const operation: Operation = {
      Name_operation: this.addOperation.get('Title_Operation')?.value,
      Id_module: this.addOperation.get('Id_module')?.value
    }
  
    console.log(operation)
  }

}
