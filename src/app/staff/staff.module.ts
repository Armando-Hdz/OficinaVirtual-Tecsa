import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffLoginComponent } from './auth/staff-login/staff-login.component';
import { StaffAddThingComponent } from './staff-add-thing/staff-add-thing.component';

import { RouterModule } from '@angular/router';
import { AddUpdateDataModule } from './add-update-data/add-update-data.module';
import { ReadDataModule } from './read-data/read-data.module';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { invalid } from '@angular/compiler/src/render3/view/util';

@NgModule({
  declarations: [
    StaffLoginComponent,
    StaffAddThingComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    AddUpdateDataModule,
    ReadDataModule,

    ErrorTailorModule.forRoot({
      errors:{
        useValue:{
          required: 'El campo es requerido',
          minlength: ({ requireLength, actualLength }) =>
          'Expect ${requireLength} but got ${actualLength}',
          invalidAddress: error => 'Direccion Incorrecta'
        }
      }  
    })
  ],
  exports:[
    StaffLoginComponent,
    StaffAddThingComponent
  ]
})
export class StaffModule { }
