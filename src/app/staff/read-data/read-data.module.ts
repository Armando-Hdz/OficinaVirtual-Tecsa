import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadModuleComponent } from './read-module/read-module.component';
import { ReadOperationComponent } from './read-operation/read-operation.component';
import { ReadRolComponent } from './read-rol/read-rol.component';
import { ReadRolOperationComponent } from './read-rol-operation/read-rol-operation.component';
import { ReadUserComponent } from './read-user/read-user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReadModuleComponent,
    ReadOperationComponent,
    ReadRolComponent,
    ReadRolOperationComponent,
    ReadUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ReadModuleComponent,
    ReadOperationComponent,
    ReadRolComponent,
    ReadRolOperationComponent,
    ReadUserComponent
  ]
})
export class ReadDataModule { }
