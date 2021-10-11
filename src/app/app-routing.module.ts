import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './ui/inicio/inicio.component';
import { EdtComponent } from './ui/edt/edt.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { CreateUpdateTaskComponent } from './ui/create-update-task/create-update-task.component';
import { ReadTaskComponent } from './ui/read-task/read-task.component';

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
    path: 'inicio-sesion',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'Mi Oficina Virtual',
    component: EdtComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'agregar',
    component: CreateUpdateTaskComponent
  },
  {
    path: 'editar/:id',
    component: CreateUpdateTaskComponent
  },
  {
    path: 'ver/:id',
    component: ReadTaskComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
