import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { EdtComponent } from './edt/edt.component';
import { FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    InicioComponent,
    EdtComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    RouterModule,
    NgxChartsModule
  ],
  exports: [
    //InicioComponent,
    //EdtComponent,
    //DashboardComponent
  ]
})
export class UiModule { }
