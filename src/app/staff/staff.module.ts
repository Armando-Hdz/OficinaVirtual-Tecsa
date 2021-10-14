import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffLoginComponent } from './auth/staff-login/staff-login.component';
import { StaffAddThingComponent } from './staff-add-thing/staff-add-thing.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StaffLoginComponent,
    StaffAddThingComponent
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
