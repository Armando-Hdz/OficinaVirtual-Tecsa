import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/interfaces/rol';

@Component({
  selector: 'app-read-rol',
  templateUrl: './read-rol.component.html',
  styleUrls: ['./read-rol.component.scss']
})
export class ReadRolComponent implements OnInit {

  readRol: Rol [] = [
    {
      Id_rol: 1,
      Name: 'RolOne',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
