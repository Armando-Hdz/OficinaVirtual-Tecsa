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
import { AddModuleComponent } from './staff/add-update-data/add-module/add-module.component';
import { AddOperationComponent } from './staff/add-update-data/add-operation/add-operation.component';
import { AddRolComponent } from './staff/add-update-data/add-rol/add-rol.component';
import { AddRolOperationComponent } from './staff/add-update-data/add-rol-operation/add-rol-operation.component';
import { ReadModuleComponent } from './staff/read-data/read-module/read-module.component';
import { ReadOperationComponent } from './staff/read-data/read-operation/read-operation.component';
import { ReadRolComponent } from './staff/read-data/read-rol/read-rol.component';
import { ReadRolOperationComponent } from './staff/read-data/read-rol-operation/read-rol-operation.component';
import { ReadUserComponent } from './staff/read-data/read-user/read-user.component';

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
    component: StaffAddThingComponent //Opciones de Admin
  },
  {
    path: 'staff/agregarmodulo',
    component: AddModuleComponent
  },
  {
    path: 'staff/agregaroperacion',
    component: AddOperationComponent
  },
  {
    path: 'staff/agregarrol',
    component: AddRolComponent
  },
  {
    path: 'staff/agregarrol-operacion',
    component: AddRolOperationComponent
  },
  {
    path: 'staff/agregarusuario',
    component: AddUserComponent
  },
  {
    path: 'staff/editarmodulo/:id',
    component: AddModuleComponent
  },
  {
    path: 'staff/editaroperacion/:id', 
    component: AddOperationComponent
  },
  {
    path: 'staff/editarrol/:id',
    component: AddRolComponent
  },
  {
    path: 'staff/editarrol-operacion/:id',
    component: AddRolOperationComponent
  },
  {
    path: 'editarusuario/:id', // Para Usuarios
    component: AddUserComponent
  },
  {
    path: 'staff/vermodulo/:id',
    component: ReadModuleComponent
  },
  {
    path: 'staff/veroperacion/:id',
    component: ReadOperationComponent
  },
  {
    path: 'staff/verrol/:id',
    component: ReadRolComponent
  },
  {
    path: 'staff/verrol-operacion/:id',
    component: ReadRolOperationComponent
  },
  {
    path: 'staff/verusuario/:id',
    component: ReadUserComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
