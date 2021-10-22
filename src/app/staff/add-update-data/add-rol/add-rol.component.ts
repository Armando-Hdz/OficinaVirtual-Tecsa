import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';
import { Rol } from 'src/app/interfaces/rol';

@Component({
  selector: 'app-add-rol',
  templateUrl: './add-rol.component.html',
  styleUrls: ['./add-rol.component.scss']
})
export class AddRolComponent implements OnInit {

  addRol: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.addRol = this.fb.group(
      {
        Title_Rol: ['', Validators.required],
      }
    )
  }

  ngOnInit(): void {
  }


  addRolDB(){
    console.log(this.addRol)

    const rol: Rol = {
      Name: this.addRol.get('Title_Rol')?.value,
    }

    console.log(rol)
  }


}
