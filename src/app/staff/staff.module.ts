import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffLoginComponent } from './auth/staff-login/staff-login.component';
import { StaffAddThingComponent } from './staff-add-thing/staff-add-thing.component';

import { RouterModule } from '@angular/router';
import { AddUpdateDataModule } from './add-update-data/add-update-data.module';
import { ReadDataModule } from './read-data/read-data.module';


@NgModule({
  declarations: [
    StaffLoginComponent,
    StaffAddThingComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    StaffLoginComponent,
    StaffAddThingComponent
  ]
})
export class StaffModule { }
