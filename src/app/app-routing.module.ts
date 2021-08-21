import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './ui/inicio/inicio.component';
import { EdtComponent } from './ui/edt/edt.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'Mi Ofcina Virtual',
    component: EdtComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
