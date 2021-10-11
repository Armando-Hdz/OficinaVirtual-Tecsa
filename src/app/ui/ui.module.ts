import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { EdtComponent } from './edt/edt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CreateUpdateTaskComponent } from './create-update-task/create-update-task.component';
import { ReadTaskComponent } from './read-task/read-task.component';

@NgModule({
  declarations: [
    InicioComponent,
    EdtComponent,
    DashboardComponent,
    CreateUpdateTaskComponent,
    ReadTaskComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    RouterModule,
    NgxChartsModule,
    ReactiveFormsModule
  ],
  exports: [
    //InicioComponent,
    //EdtComponent,
    //DashboardComponent
  ]
})
export class UiModule { }
