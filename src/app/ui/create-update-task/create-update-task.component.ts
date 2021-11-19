import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/interfaces/rol';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Working } from '../../interfaces/working';

@Component({
  selector: 'app-create-update-task',
  templateUrl: './create-update-task.component.html',
  styleUrls: ['./create-update-task.component.scss']
})
export class CreateUpdateTaskComponent implements OnInit {

  addTask: FormGroup;

  readRol: Rol[] = [
    {
      Id_rol: 1,
      Name: 'Finanzas'
    },
    {
      Id_rol: 2,
      Name: 'Administracion'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.addTask = this.fb.group(
      {
        Title_Work: ['', Validators.required],
        Description_Work: ['', Validators.required],
        Status_Work: ['', Validators.required],
        Id_Rol: [, Validators.required],
      }
    )
  }

  ngOnInit(): void {
  }

  addTaskDB(){
    console.log(this.addTask);

    const task: Working = {
      Title_Work: this.addTask.get('Title_Work')?.value,
      Description_work: this.addTask.get('Description_Work')?.value,
      Status_work: this.addTask.get('Status_Work')?.value,
      Id_Rol: this.addTask.get('Id_Rol')?.value
    }

    console.log(task);
  }
  

}
