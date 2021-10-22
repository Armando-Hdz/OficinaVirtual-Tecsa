import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule } from '@angular/router';
import { AddModuleComponent } from './add-module/add-module.component';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { AddRolComponent } from './add-rol/add-rol.component';
import { AddRolOperationComponent } from './add-rol-operation/add-rol-operation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddUserComponent,
    AddModuleComponent,
    AddOperationComponent,
    AddRolComponent,
    AddRolOperationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddUserComponent,
    AddModuleComponent,
    AddOperationComponent,
    AddRolComponent,
    AddRolOperationComponent
  ]
})
export class AddUpdateDataModule { }
