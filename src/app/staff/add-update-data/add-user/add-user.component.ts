import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Module } from 'src/app/interfaces/module';
import { Tecsauser } from 'src/app/interfaces/tecsauser';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUser: FormGroup;
  
  hide = true;

  respuesta = false;

// LEER MODULO --> DEPARTAMENTO
  readModule: Module[] = [
    {
      Id_module: 1,
      Name_module: 'ModuleOne'
    },
    {
      Id_module: 2,
      Name_module: 'ModuleTwo'
    }
  ];

  constructor(private fb: FormBuilder) { 
    this.addUser = this.fb.group(
      {
        Nombre: ['', Validators.required],
        Correo: ['', [Validators.required, Validators.email]],
        Password: ['', [Validators.required, Validators.minLength(10)]],
        Id_module: ['', Validators.required]
      }
    );
  }



  ngOnInit(): void {
  }

  resetForm(){
    this.addUser.reset();
  }

  addUserDB(){
    console.log(this.addUser)
    
    const user: Tecsauser = {
      NameUser: this.addUser.get('Nombre')?.value,
      EmailUser: this.addUser.get('Correo')?.value,
      PasswordUser: this.addUser.get('Password')?.value,
      DateUser: '',
      IdRol: this.addUser.get('Id_module')?.value
    }
    
    this.respuesta = true;
    console.log(user);
    this.resetForm();
  }
  

}


