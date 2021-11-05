import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Operation } from 'src/app/interfaces/operation';
import { Rol } from 'src/app/interfaces/rol';
import { Roloperation } from 'src/app/interfaces/roloperation';

@Component({
  selector: 'app-add-rol-operation',
  templateUrl: './add-rol-operation.component.html',
  styleUrls: ['./add-rol-operation.component.scss']
})
export class AddRolOperationComponent implements OnInit {

  readRol: Rol [] = [
    {
      Id_rol: 1,
      Name: 'RolOne',
    }
  ];

  readOperation: Operation [] = [
    {
      Id_operation: 1,
      Name_operation: 'OperacionOne',
      Id_module: 1
    }
  ];

  addRolOperation: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addRolOperation = this.fb.group(
      {
        Title_Module:['', Validators.required] ,
        Id_rol: [,Validators.required],
        Id_operation: [,Validators.required]
      }
    )
   }

  ngOnInit(): void {
  }

  addRolOperationDB(){
    console.log(this.addRolOperation)

    const roloperation: Roloperation = {
      Id_rol: this.addRolOperation.get('Id_rol')?.value,
      Id_operation: this.addRolOperation.get('Id_operation')?.value,
    }
  }

}
