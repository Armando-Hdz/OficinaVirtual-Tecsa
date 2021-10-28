import { Component, OnInit } from '@angular/core';
import { Tecsauser } from 'src/app/interfaces/tecsauser';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.scss']
})
export class ReadUserComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
