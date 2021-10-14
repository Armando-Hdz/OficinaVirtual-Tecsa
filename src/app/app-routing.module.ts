import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './ui/inicio/inicio.component';
import { EdtComponent } from './ui/edt/edt.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { CreateUpdateTaskComponent } from './ui/create-update-task/create-update-task.component';
import { ReadTaskComponent } from './ui/read-task/read-task.component';
import { StaffLoginComponent } from './staff/auth/staff-login/staff-login.component';
import { StaffAddThingComponent } from './staff/staff-add-thing/staff-add-thing.component';
import { AddUserComponent } from './staff/add-update-data/add-user/add-user.component';

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
    path: 'Mi Oficina Virtual',
    component: EdtComponent
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
  },
  {
    path: 'staff',
    redirectTo: 'staff/login',
    pathMatch: 'full'
  },
  {
    path: 'staff/login',
    component: StaffLoginComponent
  },
  {
    path: 'staff/dashboard',
    component: DashboardComponent
  },
  {
    path: 'staff/agregar',
    component: StaffAddThingComponent
  },
  {
    path: 'staff/agregarusuario',
    component: AddUserComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
