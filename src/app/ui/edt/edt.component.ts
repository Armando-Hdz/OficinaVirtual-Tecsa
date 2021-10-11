import { Component, OnInit } from '@angular/core';
import { Working } from 'src/app/interfaces/working';

@Component({
  selector: 'app-edt',
  templateUrl: './edt.component.html',
  styleUrls: ['./edt.component.scss']
})
export class EdtComponent implements OnInit {

  listTask: Working[] = [
    {
      Id_Work: 1,
      Title_Work: 'Hola',
      Description_Work: 'Decir Hola mundo',
      Status_Work: 'To Do',
      Id_Rol: 1
    },
    {
      Id_Work: 1,
      Title_Work: 'Hola',
      Description_Work: 'Decir Hola mundo',
      Status_Work: 'To Do',
      Id_Rol: 1
    },
    {
      Id_Work: 1,
      Title_Work: 'Hola',
      Description_Work: 'Decir Hola mundo',
      Status_Work: 'To Do',
      Id_Rol: 1
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
