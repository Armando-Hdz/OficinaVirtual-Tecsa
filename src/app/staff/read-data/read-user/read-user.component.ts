import { Component, OnInit } from '@angular/core';
import { Tecsauser } from 'src/app/interfaces/tecsauser';
import { Working } from 'src/app/interfaces/working'

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.scss']
})
export class ReadUserComponent implements OnInit {

  ver: boolean = false;

  readUser: Tecsauser [ ] = [
    {
      IdUser: 1,
      NameUser: 'Pepe Juarez',
      EmailUser: 'correo1@gmail.com',
      PasswordUser: '12345678',
      DateUser: new Date(),
      IdRol: 1
    },
    {
      IdUser: 2,
      NameUser: 'Juan Gabriel',
      EmailUser: 'correo2@gmail.com',
      PasswordUser: 'abcdefgh',
      DateUser: new Date(),
      IdRol: 1
    },
    {
      IdUser: 3,
      NameUser: 'Chente Fernandez',
      EmailUser: 'correo3@gmail.com',
      PasswordUser: 'chente',
      DateUser: new Date(),
      IdRol: 2
    },
    {
      IdUser: 4,
      NameUser: 'Juan Gabriel Valadez',
      EmailUser: 'correojuanga@gmail.com',
      PasswordUser: 'juangas',
      DateUser: new Date(),
      IdRol: 2
    }
  ];

  readTasks: Working [] = [
    {
      Id_Work: 1,
      Title_Work: 'Tarea 1',
      Description_Work: 'Descripcion 1',
      Status_Work: 'Trabajando',
      Id_Rol: 1
    },
    {
      Id_Work: 2,
      Title_Work: 'Tarea 2',
      Description_Work: 'Descripcion 2',
      Status_Work: 'Trabajando',
      Id_Rol: 1
    },
    {
      Id_Work: 3,
      Title_Work: 'Tarea 3',
      Description_Work: 'Descripcion 3',
      Status_Work: 'Terminado',
      Id_Rol: 1
    },
  ];

  showTask() {
    this.ver = true;
  }

  hideTask(){
    this.ver =false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
