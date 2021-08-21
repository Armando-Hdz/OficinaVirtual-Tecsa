import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { EdtComponent } from './edt/edt.component';

import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    InicioComponent,
    EdtComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    InicioComponent,
    EdtComponent
  ]
})
export class UiModule { }
